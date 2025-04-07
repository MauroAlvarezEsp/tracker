import React from 'react';
import { render } from '@testing-library/react';
import MapComponent from '../app/(modules)/monitor/components/map.component'; // Adjust the path if needed
import { Coodinates, TrackData } from '../types/TrackData';
import '@testing-library/jest-dom';


// Mock Leaflet components
jest.mock('react-leaflet', () => ({
  MapContainer: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  TileLayer: () => <div>TileLayer Mock</div>,
  Marker: ({ position, children }: { position: Coodinates, children: React.ReactNode }) => <div>{`${position}`} {children}</div>,
  Popup: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  useMap: () => ({ setView: jest.fn() }),
}));


describe('MapComponent', () => {
  const mockData: TrackData[] = [
    { coordinates: {lat: 7.4326, lng:-81.1532}, number: 'Marker 1' },
    { coordinates: {lat: 19.4326, lng:-99.1332}, number: 'Marker 2' },
  ];

  it('renders without crashing', () => {
    const { getByText } = render(
      <MapComponent data={mockData} mapPosition={mockData[0].coordinates}/>
    );
    expect(getByText('Location Map')).toBeInTheDocument();
  });

  it('displays markers based on data prop', () => {
    const { getByText } = render(
      <MapComponent data={mockData} mapPosition={mockData[1].coordinates}/>
    );

    expect(getByText('7.4326,-81.1532')).toBeInTheDocument();
    expect(getByText('Marker 1')).toBeInTheDocument();
    
    expect(getByText('19.4326,-99.1332')).toBeInTheDocument();
    expect(getByText('Marker 2')).toBeInTheDocument();
  });
});