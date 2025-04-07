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