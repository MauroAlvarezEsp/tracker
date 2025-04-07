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
