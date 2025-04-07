### MapComponent

**Description**  
The `MapComponent` is a reusable React component designed to display a map with markers and popups for each marker. It uses lazy-loading optimization to dynamically import heavy dependencies from the `react-leaflet` library, enhancing performance and avoiding unnecessary imports.

---

### Props

1. **`data`** *(Array of TrackData)*  
   - An array of marker data for the map, including coordinates and additional information displayed in the popup.
   - Each item in `data` should adhere to the `TrackData` type with the following structure:
     ```typescript
     type Coordinates = {
       lat: number;
       lng: number;
     };

     type TrackData = {
       number: string;
       coordinates: Coordinates;
     };
     ```

2. **`mapPosition`** *(Coordinates)*  
   - Specifies the initial center position of the map and updates the view when invoked by the user.

---

### Key Features

1. **Lazy Loading**  
   - Uses dynamic imports to optimize performance and reduce initial load times:
     ```javascript
     const MapContainer = dynamic(() => import("react-leaflet").then(mod => mod.MapContainer), { ssr: false });
     ```
     The same approach applies to other components like `TileLayer`, `Marker`, and `Popup`.

2. **Dynamic Marker Creation**  
   - Dynamically generates markers from the `data` prop using `useMemo` for optimization:
     ```javascript
     const markers = useMemo(() => {
       return data?.map((row: TrackData, index: number) => (
         <Marker key={index} position={[row.coordinates.lat, row.coordinates.lng]}>
           <Popup>{row.number}</Popup>
         </Marker>
       ));
     }, [data]);
     ```

3. **SetViewOnClick**  
   - A helper function to adjust the map view to the provided latitude and longitude when triggered:
     ```javascript
     const SetViewOnClick = ({ lat, lng }: Coordinates) => {
       const map = useMap();
       map.setView([lat, lng]);
       return null;
     };
     ```

4. **OpenStreetMap Integration**  
   - Loads map tiles from OpenStreetMap with proper attribution:
     ```javascript
     <TileLayer
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     />
     ```

---

### Rendering Structure

The `MapComponent` renders the following UI elements:
1. **Header**: Displays the title, "Location Map."
2. **Map**: Wrapped inside the `MapContainer`, initialized with `mapPosition` and a zoom level of 15.
3. **Markers**: Dynamically created using the `data` prop.
4. **Popups**: Display additional information (`number` from `TrackData`) for each marker.

---

### Usage

To use the `MapComponent`, import it into your project and pass the required props:
```javascript
import MapComponent from './path-to-component';

const sampleData = [
  { number: 'Marker 1', coordinates: { lat: 19.432608, lng: -99.133209 } },
  { number: 'Marker 2', coordinates: { lat: 19.427025, lng: -99.135610 } },
];

const initialPosition = { lat: 19.432608, lng: -99.133209 };

<MapComponent data={sampleData} mapPosition={initialPosition} />;
