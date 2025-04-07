### File Documentation: `TraveledKilometersGraph`

#### **Overview**
This React component renders a bar chart using Chart.js via the `react-chartjs-2` library. It visualizes the number of kilometers traveled by vehicles, fetching real-time data from an API. Additionally, it includes a button to download data as a CSV file.

---

#### **Key Features**
1. **Dynamic Data**:
   - Fetches tracking data (vehicle numbers and kilometers traveled) from an API.

2. **Optimized Performance**:
   - Uses memoization (`useMemo`) to optimize rendering.

3. **Interactive Chart**:
   - Displays a responsive bar chart with customizable options.

4. **Download Option**:
   - Provides a "Download CSV" button for data export.

---

#### **Functionality Breakdown**

##### **Imports**
- Core React hooks: `useState`, `useEffect`, `useMemo`.
- `react-chartjs-2` for Chart.js integration.
- Chart.js modules: `CategoryScale`, `LinearScale`, `BarElement`, `Title`, `Tooltip`, `Legend`.
- Custom utilities and constants: `TrackData`, `trackingPath`, `download`, `handleDownload`.

##### **State Management**
```tsx
const [data, setData] = useState<TrackData[]>([]);
