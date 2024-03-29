import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

const mongo_url = process.env.MONGODB_URI;
const dbName = 'matt3o0-website';

export async function POST(request: NextRequest) {
    let client;
    if (!mongo_url) {
        return new NextResponse(JSON.stringify({
            status: 500,
            message: 'MongoDB error.',
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        client = new MongoClient(mongo_url);
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection("redirects");
        let epoch = Math.floor(Date.now() / 1000);
        const deleteCriteria = {
            stops_on: { $lte: epoch, $ne: 1 }
          };
          
        const result = await collection.deleteMany(deleteCriteria);
        const response =  new NextResponse(JSON.stringify({
            status: 200,
            message: 'Successfully removed all old redirects.',
            result: result,
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0',
                'Surrogate-Control': 'no-store',
            }
        });
        return response;
    } catch (err) {
        return new NextResponse(JSON.stringify({
            status: 500,
            message: `${err}`,
            result: {}
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    } finally {
        if (client) {
            await client.close();
        }
    }
}

