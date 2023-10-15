"use client";
import RedirectItem from '@/components/redirects/redirect_item';
import { ReactElement, useEffect, useState } from "react";
import React from 'react';

type responseType = Array<{
    redirect_id: string;
    url: string;
    stops_on: number;
}>;

export default function RedirectList() {
    const [resp, setResp] = useState<responseType | null>(null);


    useEffect(() => {
        (async () => {
            if (resp === null) {
                try {
                    console.log("Listing?");
                    const apiUrl = new URL('/api/redirects/list', window.location.origin);
                    apiUrl.searchParams.append('name', "rpi-stats");
                    const response = await fetch(apiUrl, { cache: 'no-store' });
                    let JSONResponse = await response.json();
                    setResp(JSONResponse.result);
                } catch (e) {
                    console.error(e);
                    setResp(null);
                }
            } else {
                console.log("fuck you")
            }
        })();
    }, []);

    const data = [
        { redirect_id: "hello", url: 'https://matt3o0.is-a.dev', stops_on: 1 },
    ];

    if (resp) {
        return (
            <div>
                {resp.map((item) => (
                    <RedirectItem key={item.redirect_id} item={item} />
                ))}
            </div>
        );
    } else {
        return <p>Test</p>
    }
};
