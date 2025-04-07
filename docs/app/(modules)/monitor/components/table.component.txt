### TableComponent

**Description**  
The `TableComponent` is a reusable React component that renders a table. It dynamically generates rows from the `data` prop and exposes functionality to update the map's position via an `onClick` function.

---

### Props

1. **`data`** *(Array of TrackData)*  
   - Contains the data to be rendered in the table rows.
   - Each item in `data` should follow the `TrackData` type with the following structure:
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

2. **`setMapPosition`** *(Function)*  
   - A function that updates the map's position. It is called when a table cell is clicked, passing the latitude and longitude from the clicked row's coordinates.

---

### Key Features

1. **Dynamic Row Generation**  
   - Table rows are generated dynamically based on the `data` prop using `useMemo` for optimization:
     ```javascript
     const dataRows = useMemo(() => {
       return data?.map((row: TrackData, index: number) => (
         <tr
           key={index}
           className={`${
             index % 2 === 0 ? "bg-gray-400 dark:bg-gray-800" : "bg-gray-300 dark:bg-gray-700"
           } hover:bg-gray-500 hover:cursor-pointer`}
         >
           <td onClick={() => centerMapToItem(row)}>{row.number}</td>
           <td onClick={() => centerMapToItem(row)}>{row.coordinates.lat}</td>
           <td onClick={() => centerMapToItem(row)}>{row.coordinates.lng}</td>
         </tr>
       ));
     }, [data]);
     ```

2. **Interactive Table Cells**  
   - Clicking on any cell of a row triggers the `setMapPosition` function, centering the map to the corresponding row's coordinates:
     ```javascript
     const centerMapToItem = (row: TrackData) => {
       setMapPosition({ lat: row.coordinates.lat, lng: row.coordinates.lng });
     };
     ```

3. **Styling**  
   - Alternating row styles for readability and hover effects for interactivity:
     ```javascript
     className={`${
       index % 2 === 0 ? "bg-gray-400 dark:bg-gray-800" : "bg-gray-300 dark:bg-gray-700"
     } hover:bg-gray-500 hover:cursor-pointer`}
     ```

4. **Optimized Rendering**  
   - Uses `useMemo` to optimize row generation and minimize unnecessary recalculations.

---

### Rendering Structure

The `TableComponent` renders:
1. **Header**: Includes column titles such as "Placas," "Latitud," and "Longitud."
2. **Rows**: Dynamically generated from the `data` prop.
3. **Clickable Cells**: Updates the map position when clicked.

---

### Usage

To use the `TableComponent`, import it into your project and pass the required props:
```javascript
import TableComponent from './path-to-component';

const sampleData = [
  { number: 'Marker 1', coordinates: { lat: 19.432608, lng: -99.133209 } },
  { number: 'Marker 2', coordinates: { lat: 19.427025, lng: -99.135610 } },
];

const handleSetMapPosition = (newPosition) => {
  console.log('Updated map position:', newPosition);
};

<TableComponent data={sampleData} setMapPosition={handleSetMapPosition} />;
