// /pages/api/download-csv.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { parse } from 'json2csv';
import { dataMock } from '../mocks';


export function GET(): Response {
    try {

        // Convert JSON data to CSV format
        const csv: string = parse(dataMock);

        return new Response(csv, {
            headers: {
                'Content-Type': 'text/csv',
                'Content-Disposition': 'attachment; filename=data.csv'
            },
            status: 200
        })

    } catch (error) {
        console.error('Error generating CSV:', error);
        return new Response('Failed to generate CSV file', {status: 500})
    }
}
