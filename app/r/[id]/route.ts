import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

const mongo_url = process.env.MONGODB_URI;
const dbName = 'matt3o0-website';

export async function GET(request: NextRequest, { params }: { params: { id: string}}) {
    const host = `http://${request.headers.get('host')}`
    const not_found = host + "/404";
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
        const query = { redirect_id: params.id };
        const result = await collection.find(query).toArray();
        const epoch = Math.floor(Date.now() / 1000);
        if (result[0]) {
            if (result[0].stops_on >= epoch || result[0].stops_on === 1) {
                return NextResponse.redirect(result[0].url);
            } else {
                await collection.deleteOne(query);
                return NextResponse.redirect(not_found);
            }
        } else {
            return NextResponse.redirect(not_found);
        }
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

