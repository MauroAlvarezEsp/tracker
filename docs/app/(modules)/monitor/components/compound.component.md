### CompoundComponent Documentation

**Description:**
The `CompoundComponent` is a React component implementing the compound/mediator design pattern to manage and share triggers between different child components (`MapComponent` and `TableComponent`). It uses context for scalability and to avoid prop drilling, ensuring a cleaner, more maintainable structure for managing state.

---

**Usage:**  
This component renders a map and a table, allowing for interaction between them, such as updating the map position based on table actions. It leverages React's lazy loading for efficient code splitting and dynamic import.

---

**Props:**
- `data` (`TrackData[]`): An array of tracking data used by both child components (`MapComponent` and `TableComponent`).

---

**Key Features:**
1. **Lazy Loading:**  
   `MapComponent` and `TableComponent` are imported lazily using `React.lazy()` to optimize loading performance.

2. **State Management:**  
   - `mapPosition`: A state variable initialized with `mapInitialPosition` to manage the map's position.
   - `setMapPosition`: A function passed to `TableComponent` for updating `mapPosition`.

3. **Context:**  
   - `DataContext`: Provides a shared state or configuration, offering scalability for potential future setups like Redux.

---

**Implementation Details:**
- **Compound/Mediator Pattern:**  
  The `CompoundComponent` facilitates coordination between `MapComponent` and `TableComponent`, ensuring minimal coupling between components while sharing triggers effectively.

- **Scalability:**  
  The use of context makes the component scalable, allowing for easier state management and potential transitions to Redux or other global state management solutions.

---

**Code Example:**
```typescript
import { CompoundComponent } from "./compound.component";

// Example data for `TrackData`
const trackData = [
  { id: 1, name: "Track 1", position: [10, 20] },
  { id: 2, name: "Track 2", position: [15, 25] },
];

function App() {
  return (
    <CompoundComponent data={trackData} />
  );
}
