import { Collection, MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from 'crypto';

const mongo_url = process.env.MONGODB_URI;
const dbName = 'matt3o0-website';

function generateShortID(length: number): string {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const randomBytesCount = Math.ceil((length * 3) / 4);

    const randomBytesBuffer = randomBytes(randomBytesCount);
    let shortID = '';

    for (let i = 0; i < randomBytesCount; i++) {
        const randomValue = randomBytesBuffer.readUInt8(i);
        shortID += charset[randomValue % charset.length];
    }

    return shortID;
}

async function redirectIDExists(collection: any, redirectId: string): Promise<boolean> {
    const query = { redirect_id: redirectId };
    const result = await collection.find(query).toArray();

    if (result[0]) {
        if (result[0].redirect_id === redirectId) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function isValidURL(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

export async function POST(request: NextRequest) {
    const host = `http://${request.headers.get('host')}`
    let client;

    try {
        const requestBody = await request.json();

        if (requestBody && requestBody.token != process.env.UPDATE_TOKEN) {
            return new NextResponse(JSON.stringify({
                status: 401,
                message: 'Invalid token.',
                link: null,
            }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        if (!mongo_url) {
            return new NextResponse(JSON.stringify({
                status: 500,
                message: 'MongoDB error.',
                link: null,
            }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        let insertResult;
        let redirectId = 'none';

        if (!requestBody.url) {
            return new NextResponse(JSON.stringify({
                status: 400,
                message: 'No URL specified.',
                link: null,
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            if (!isValidURL(requestBody.url)) {
                return new NextResponse(JSON.stringify({
                    status: 400,
                    message: 'Invalid URL specified.',
                    link: null,
                }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                });
            }
        }

        if (!requestBody.stops_on) {
            return new NextResponse(JSON.stringify({
                status: 400,
                message: 'No value for stops_on specified.',
                link: null,
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        client = new MongoClient(mongo_url);
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection("redirects");

        if (collection) {
            if (!requestBody.redirect_id) {
                if (typeof (requestBody.redirect_id_length) === 'number') {
                    let status = true;
                    while (status) {
                        redirectId = generateShortID(requestBody.redirect_id_length);
                        status = await redirectIDExists(collection, redirectId);
                    }
                } else {
                    let status = true;
                    while (status) {
                        redirectId = generateShortID(6);
                        status = await redirectIDExists(collection, redirectId);
                    }
                }

            } else {
                redirectId = requestBody.redirect_id

                if (await redirectIDExists(collection, redirectId)) {
                    return new NextResponse(JSON.stringify({
                        status: 400,
                        message: 'Redirect ID already exists in database.',
                        link: null,
                    }), {
                        status: 400,
                        headers: { 'Content-Type': 'application/json' },
                    });
                }
            }

            await collection.insertOne({
                redirect_id: redirectId,
                url: requestBody.url,
                stops_on: requestBody.stops_on,
                hidden: requestBody.hidden ?? false
            });
            insertResult = `Redirect to '${requestBody.url}' addded with ID '${redirectId}'`
        } else {
            insertResult = "No redirect added due to unkown reasons."
        }

        return new NextResponse(JSON.stringify({
            status: 200,
            message: insertResult,
            link: host + '/r/' + redirectId
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json', 'Allow': 'POST' },
        });
    } catch (err) {
        return new NextResponse(JSON.stringify({
            status: 500,
            message: `${err}`,
            link: null,
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

