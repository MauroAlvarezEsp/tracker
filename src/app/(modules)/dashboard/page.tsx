'use client'
import React, { useEffect, useMemo, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { TrackData } from "@/types/TrackData";
import { download, trackingPath } from "@/utils/constants";
import { doReq, graphOptions, handleDownload } from "@/utils/utils";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const TraveledKilometersGraph: React.FC = () => {
  const [data, setData] = useState<TrackData[]>([])
  const labels = data.map((item) => item.number);
  const kilometers = data.map((item) => item.traveledKilometers);

  useEffect(() => {
    const fetchData = async () => {
      //Dependecy injection
      //use of next Request Memoization cache layer
        const res = await doReq(`${process.env.NEXT_PUBLIC_API_URL}${trackingPath}`, {next: { revalidate: 200 }});
        if (!res.ok) 
            throw new Error(`An error ocurred: ${res.statusText}`);
        const json = await res.json();
        setData(json.data);
    };

    if(!data.length)
      fetchData();
  }, []);

  // Memoized data for optimization
  const chartData = useMemo(() => {
    return {
      labels: labels,
      datasets: [
        {
          label: "Kilometers Traveled",
          data: kilometers,
          backgroundColor: "rgba(25, 111, 111, 0.5)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };
  }, [data]);

  return (
    <div className="overflow-x-auto h-screen">
      <div className="min-w-full bg-gray-400 dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-700">
        <h2 className="px-4 py-2 bg-gray-500 text-xl mb-4 text-white dark:bg-gray-800 text-left">
          Kilometers Traveled Graph
        </h2>
        <div className="p-4">
          <Bar data={chartData} options={graphOptions("Kilometers Traveled by Each Vehicule")} />
        </div>
        <div className="p-4 text-right">
          <button
            onClick={() => handleDownload(`${process.env.NEXT_PUBLIC_API_URL}${download}`)}
            className="px-4 py-2 dark:bg-blue-900 rounded dark:hover:bg-slate-700 hover:bg-gray-600 bg-gray-500 text-white focus:outline-none">
              Download CSV
          </button>
        </div>
      </div>
    </div>
  );
};


export default TraveledKilometersGraph;
