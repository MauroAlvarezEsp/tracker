'use client'

import { TrackData } from "@/types/TrackData";
import React, { useEffect, useState } from "react";
import DataContext from "@/commons/data.context";
import { mapInitialPosition } from "@/utils/constants";
import { movePositions } from "@/utils/utils";

const MapComponent = React.lazy(() => import("./map.component"));
const TableComponent = React.lazy(() => import("./table.component"));


//compound/mediator pattern to split and share trigers
export const CompoundComponent = ({ data }: { data: TrackData[] })  => {
    const [mapPosition, setMapPosition] = useState(mapInitialPosition)
    const [info, setInfo] = useState<TrackData[]>(data)

    useEffect(() => {
      setInterval(() => {
        setInfo(movePositions(info))
      }, 1000)
    },[])

    return (
        //context for scalability to avoid Prop Drilling. or future redux setup
        <>
        <DataContext.Provider value={{}}>
            <MapComponent data={info} mapPosition={mapPosition}/>
            <TableComponent data={info} setMapPosition={setMapPosition}/>
        </DataContext.Provider>
        </>
    );
}