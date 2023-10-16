"use client";
import RedirectItem from '@/components/redirects/redirect_item';
import { ReactElement, useEffect, useState } from "react";
import React from 'react';
import styles from "./redirect_list.module.css";

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
                    const apiUrl = new URL('/api/redirects/list', window.location.origin);
                    apiUrl.searchParams.append('name', "rpi-stats");
                    const response = await fetch(apiUrl, { cache: 'no-store' });
                    let JSONResponse = await response.json();
                    setResp(JSONResponse.result);
                } catch (e) {
                    console.error(e);
                    setResp(null);
                }
            }
        })();
    }, []);

    if (resp) {
        return (
            <div className={styles.table_container}>
                <table>
                    <thead>
                        <th className={styles.table_heading}>Redirect ID</th>
                        <th className={styles.table_heading}>URL</th>
                        <th className={styles.table_heading}>Stops On</th>
                    </thead>
                    <tbody>
                        {resp.map((item) => (
                            <RedirectItem key={item.redirect_id} item={item} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    } else {
        return <span className={styles.icon}></span>;
    }
};
