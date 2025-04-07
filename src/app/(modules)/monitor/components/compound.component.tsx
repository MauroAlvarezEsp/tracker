'use client'

import { TrackData } from "@/types/TrackData";
import React, { useState } from "react";
import DataContext from "@/commons/data.context";
import { mapInitialPosition } from "@/utils/constants";

const MapComponent = React.lazy(() => import("./map.component"));
const TableComponent = React.lazy(() => import("./table.component"));


//compound/mediator pattern to split and share trigers
export const CompoundComponent = ({ data }: { data: TrackData[] })  => {
    const [mapPosition, setMapPosition] = useState(mapInitialPosition)

    return (
        //context for scalability to avoid Prop Drilling. or future redux setup
        <>
        <DataContext.Provider value={{}}>
            <MapComponent data={data} mapPosition={mapPosition}/>
            <TableComponent data={data} setMapPosition={setMapPosition}/>
        </DataContext.Provider>
        </>
    );
}