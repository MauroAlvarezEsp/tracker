import { TrackData } from "@/types/TrackData";
import { User } from "@/types/User";
import { getRandomCoordinates } from "@/utils/utils";

export const dataMock: { data: TrackData[] } = {
    data: [
        {
            number: "PRA-46-42",
            coordinates: getRandomCoordinates(),
            traveledKilometers: 1250.5
        },
        {
            number: "PXP-33-53",
            coordinates: getRandomCoordinates(),
            traveledKilometers: 834.9
        },
        {
            number: "RFM-87-23",
            coordinates: getRandomCoordinates(),
            traveledKilometers: 1745.3

        },
        {
            number: "SLP-93-07",
            coordinates: getRandomCoordinates(),
            traveledKilometers: 250.0
        },
        {
            number: "TKY-28-73",
            coordinates: getRandomCoordinates(),
            traveledKilometers: 1443.2
        },
        {
            number: "UAC-36-34",
            coordinates: getRandomCoordinates(),
            traveledKilometers: 637.8
        },
        {
            number: "ULK-67-46",
            coordinates: getRandomCoordinates(),
            traveledKilometers: 984.5
        },
        {
            number: "UVU-017-A",
            coordinates: getRandomCoordinates(),
            traveledKilometers: 500.2
        },
        {
            number: "UWA-773-R",
            coordinates: getRandomCoordinates(),
            traveledKilometers: 765.7
        },
        {
            number: "WCV-89-60",
            coordinates: getRandomCoordinates(),
            traveledKilometers: 1234.1
        },
        {
            number: "WSE-83-41",
            coordinates: getRandomCoordinates(),
            traveledKilometers: 670.4
        },
        {
            number: "GTY-00-02",
            coordinates: getRandomCoordinates(),
            traveledKilometers: 289.0
        },
        {
            number: "GTR-10-20",
            coordinates: getRandomCoordinates(),
            traveledKilometers: 1925.2
        },
        {
            number: "XHM-89-09",
            coordinates: getRandomCoordinates(),
            traveledKilometers: 1423.6
        },
        {
            number: "NVO-56-90",
            coordinates: getRandomCoordinates(),
            traveledKilometers: 1034.8
        },
        {
            number: "VIS-77-42",
            coordinates: getRandomCoordinates(),
            traveledKilometers: 456.7
        },
        {
            number: "NUN-60-30",
            coordinates: getRandomCoordinates(),
            traveledKilometers: 765.3
        },
        {
            number: "MSF-00-20",
            coordinates: getRandomCoordinates(),
            traveledKilometers: 1289.4
        },
        {
            number: "AMZ-32-45",
            coordinates: getRandomCoordinates(),
            traveledKilometers: 984.7
        },
        {
            number: "APR-42-78",
            coordinates: getRandomCoordinates(),
            traveledKilometers: 984.7
        },
    ]
}

export const menuLinks = [
    {
      title: "Dashboard",
      path: "/dashboard",
      requiredRoles: ["owner", "admin"]
    },
    {
      title: "Monitor",
      path: "/monitor",
      requiredRoles: ["owner"]
    }
];


export const testUsers: User[] = [
    {
      id: 1,
      email: "contact@company.io",
      password: "12345678",
      roles: ["owner", "admin"]
    },
    {
      id: 1,
      email: "info@company.io",
      password: "12345678",
      roles: ["admin"]
    }
  ]