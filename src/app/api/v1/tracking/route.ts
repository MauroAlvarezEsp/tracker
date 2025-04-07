import { dataMock } from "../mocks";

export async function GET() {    
    const responseError = {
        data: null,
        error:{
            message: "Service Unavailable"
        }
    }

    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    await delay(2000);

    return new Response(JSON.stringify(dataMock), {status: 200})
}


interface Region {
    minLat: number;
    maxLat: number;
    minLng: number;
    maxLng: number;
  }

export function getRandomCoordinates(): { lat: number; lng: number } {
// Define the bounding boxes for each region
const regions: Record<string, Region> = {
    mexicoCity: { minLat: 19.199, maxLat: 19.500, minLng: -99.317, maxLng: -99.056 },
    stateOfMexico: { minLat: 18.562, maxLat: 19.799, minLng: -100.397, maxLng: -98.842 },
    morelos: { minLat: 18.390, maxLat: 18.998, minLng: -99.686, maxLng: -98.998 },
    queretaro: { minLat: 20.313, maxLat: 21.241, minLng: -100.449, maxLng: -99.821 },
};

// Pick a random region
const regionKeys = Object.keys(regions);
const randomRegion = regions[regionKeys[Math.floor(Math.random() * regionKeys.length)]];

// Generate random latitude and longitude within the selected region
const randomLat = (Math.random() * (randomRegion.maxLat - randomRegion.minLat)) + randomRegion.minLat;
const randomLng = (Math.random() * (randomRegion.maxLng - randomRegion.minLng)) + randomRegion.minLng;

return { lat: randomLat, lng: randomLng };
}