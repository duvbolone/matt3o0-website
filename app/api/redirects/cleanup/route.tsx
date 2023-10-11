import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

const mongo_url = process.env.MONGODB_URI;
const dbName = 'matt3o0-website';

export async function GET(request: NextRequest) {
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
        const epoch = Math.floor(Date.now() / 1000);
        const result = await collection.find().toArray();
        if (result[0]) {
            for (let i = 0; i < result.length; i++) {
                if (result[i].stops_on <= epoch || result[i].stops_on !== 1) {
                    await collection.deleteOne({ redirect_id: result[i].redirect_id})
                }
            }
        } else {
            return new NextResponse(JSON.stringify({
                status: 500,
                message: 'MongoDB error.',
                result: result
            }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        return new NextResponse(JSON.stringify({
            status: 200,
            message: 'Successfully removed all old redirects.',
            result: result
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
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

