import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TableComponent from '../app/(modules)/monitor/components/table.component';
import '@testing-library/jest-dom';

describe('TableComponent', () => {
  const mockSetMapPosition = jest.fn();
  const mockData = [
    { number: '1', coordinates: { lat: 10, lng: 20 } },
    { number: '2', coordinates: { lat: 30, lng: 40 } },
  ];

  const renderComponent = () =>
    render(
      <TableComponent
        data={mockData}
        setMapPosition={mockSetMapPosition}
      />
    );

  test('renders table headers correctly', () => {
    renderComponent();

    expect(screen.getByText('Placas')).toBeInTheDocument();
    expect(screen.getByText('Latitud')).toBeInTheDocument();
    expect(screen.getByText('Longitud')).toBeInTheDocument();
  });

  test('renders table rows with correct data', () => {
    renderComponent();

    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(mockData.length + 1); // Including header row

    const firstRow = rows[1];
    expect(firstRow).toHaveTextContent('1');
    expect(firstRow).toHaveTextContent('10');
    expect(firstRow).toHaveTextContent('20');

    const secondRow = rows[2];
    expect(secondRow).toHaveTextContent('2');
    expect(secondRow).toHaveTextContent('30');
    expect(secondRow).toHaveTextContent('40');
  });

  test('calls setMapPosition on row click', () => {
    renderComponent();

    const firstRowCells = screen.getAllByText('1');
    fireEvent.click(firstRowCells[0]);

    expect(mockSetMapPosition).toHaveBeenCalled();
  });
});