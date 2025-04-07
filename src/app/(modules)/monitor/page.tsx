import React from "react";
import { CompoundComponent } from "./components/compound.component";
import ErrorComponent from "../../../commons/error";
import { trackingPath } from "@/utils/constants";
import { doReq } from "@/utils/utils";

//Client-Server Composition Pattern
export default async function HomeComponent() {
  //Dependecy injection
  //use of next Request Memoization cache layer
  const response = await doReq(`${process.env.NEXT_PUBLIC_API_URL}${trackingPath}`,{
    next: { revalidate: 200 },
  });

  const jsonRes = await response.json();

  return (
    response.ok
      ? <CompoundComponent data={jsonRes.data}/>
      : <ErrorComponent message={jsonRes.error.message}/>
  );
}
