import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

const mongo_url = process.env.MONGODB_URI;
const dbName = 'matt3o0-website';

export async function GET(request: NextRequest) {
    const url = new URL(request.url, `http://${request.headers.get('host')}`);
    const queryParams = new URLSearchParams(url.search);
    const redirect_id = queryParams.get('redirect_id');
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

    if (queryParams.get('token') != process.env.UPDATE_TOKEN) {
        return new NextResponse(JSON.stringify({
            status: 401,
            message: 'Invalid token.',
        }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    if (!redirect_id) {
        return new NextResponse(JSON.stringify({
            status: 400,
            message: 'No redirect_id provided.',
        }), {
            status: 400,
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
            redirect_id: redirect_id
          };
          
        const result = await collection.deleteOne(deleteCriteria);
        let message;
        
        if (result.deletedCount != 0) {
            message = `Successfully removed '${redirect_id}'.`;
        } else {
            message = `Nothing was removed.`;
        }

        const response =  new NextResponse(JSON.stringify({
            status: 200,
            message: message,
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
            data: {}
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

