import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }).trim(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .trim(),
  });

export const handleDownload = (path: string) => {
  // Trigger the download by making a fetch request to the API
  fetch(path)
      .then(response => {
          if (!response.ok) {
              throw new Error('Failed to download file');
          }
          return response.blob(); // Convert the response to a Blob
      })
      .then(blob => {
          const url = window.URL.createObjectURL(blob); // Create a Blob URL
          const a = document.createElement('a'); // Create a hidden anchor element
          a.href = url;
          a.download = 'data.csv'; // Set the desired file name
          a.click(); // Programmatically click the anchor element to start the download
          window.URL.revokeObjectURL(url); // Clean up the Blob URL
      })
      .catch(error => console.error('Error downloading file:', error));
};

export const graphOptions = (text: string) => {
    return {
        responsive: true,
        plugins: {
          legend: {
            position: "top" as const,
          },
          title: {
            display: true,
            text: text,
          },
        },
    }
};

//Immport this funcion fot http req Dependency injection
export const doReq = async (path: string, options: any) => {
  return await fetch(path, options)
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