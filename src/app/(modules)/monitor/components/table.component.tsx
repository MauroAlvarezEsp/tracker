'use client';

import React from 'react'
import { DataPositionProps } from "@/types/DataPositionProps";
import { TrackData } from "@/types/TrackData";
import { useMemo } from "react";

//reusable table component render table and exposes values of onclick function
const TableComponent = ({data, setMapPosition}: DataPositionProps) => {

  const centerMapToItem = (row: TrackData) => {
    setMapPosition({lat:row.coordinates.lat, lng:row.coordinates.lng})
  }

  //optimization to avoid recalculations
  const dataRows = useMemo(() => {
    return data?.map((row: TrackData, index: number) => (
      <tr
        key={index}
        className={`${
          index % 2 === 0 ? "bg-gray-400 dark:bg-gray-800" : "bg-gray-300 dark:bg-gray-700"
        } hover:bg-gray-500 hover:cursor-pointer`}
      >
        <td onClick={() => centerMapToItem(row)} className="px-4 py-2 border-b border-gray-600">{row.number}</td>
        <td onClick={() => centerMapToItem(row)} className="px-4 py-2 border-b border-gray-600">{row.coordinates.lat}</td>
        <td onClick={() => centerMapToItem(row)} className="px-4 py-2 border-b border-gray-600">{row.coordinates.lng}</td>
      </tr>
    ));
  }, [data]); 

  return (
    <div className="overflow-x-auto h-[265px]">
      <table className="min-w-full bg-gray-400 dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-700 overflow-y-auto dark:bg-red-900">
        <thead className="bg-gray-500 text-white dark:bg-gray-800">
          <tr>
            <th className="px-4 py-2 text-left">Placas</th>
            <th className="px-4 py-2 text-left">Latitud</th>
            <th className="px-4 py-2 text-left">Longitud</th>
          </tr>
        </thead>
        <tbody>
          { dataRows }
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
