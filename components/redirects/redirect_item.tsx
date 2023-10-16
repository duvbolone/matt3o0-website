"use client";
import { useState } from "react";
import IconLink from "../link";
import styles from "./redirect_list.module.css";

interface RedirectItem {
    redirect_id: string;
    url: string;
    stops_on: number;
}

function timestampToHumanReadable(timestamp: number, type: "relative" | "full" = "full"): string {
    // Check if the timestamp is a finite number
    if (!Number.isFinite(timestamp)) {
        return "Invalid timestamp";
    }

    const now = Date.now();

    if (timestamp == 1) {
        return "Forever";
    }

    if (now / 1000 - timestamp >= 0) {
        return "To Be Deleted";
    }


    if (type === "full") {
        // Determine the timestamp's length to infer the unit (seconds or milliseconds)
        const timestampLength = timestamp.toString().length;

        // Convert timestamp to milliseconds if it's in seconds
        const adjustedTimestamp = timestampLength === 10 ? timestamp * 1000 : timestamp;

        const dateObj = new Date(adjustedTimestamp);

        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short'
        };

        const formatter = new Intl.DateTimeFormat(undefined, options);

        return formatter.format(dateObj);
    } else {
        // Convert timestamp to milliseconds if it's in seconds
        const adjustedTimestamp = timestamp.toString().length === 10 ? timestamp * 1000 : timestamp;

        const diffInSeconds = Math.floor((adjustedTimestamp - now) / 1000);

        const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

        if (diffInSeconds > 0) {
            return rtf.format(diffInSeconds, 'second');
        } else if (diffInSeconds > -60) {
            return rtf.format(diffInSeconds, 'second');
        } else if (diffInSeconds > -3600) {
            return rtf.format(Math.floor(diffInSeconds / -60), 'minute');
        } else if (diffInSeconds > -86400) {
            return rtf.format(Math.floor(diffInSeconds / -3600), 'hour');
        } else if (diffInSeconds > -2592000) {
            return rtf.format(Math.floor(diffInSeconds / -86400), 'day');
        } else if (diffInSeconds > -31536000) {
            return rtf.format(Math.floor(diffInSeconds / -2592000), 'month');
        } else {
            return rtf.format(Math.floor(diffInSeconds / -31536000), 'year');
        }
    }
}

const RedirectItem = ({ item }: { item: RedirectItem }) => {
    const [timeType, setTimeType] = useState<"relative" | "full">("relative");

    return (
        <tr className={styles.table_row}>
            <td className={styles.table_desc} onClick={() => navigator.clipboard.writeText(item.redirect_id)}>{item.redirect_id}</td>
            <td className={styles.table_desc}>
                <IconLink url={item.url}></IconLink>
            </td>
            <td className={styles.table_desc} onClick={() => setTimeType(timeType === "relative" ? "full" : "relative")}>
                {timestampToHumanReadable(item.stops_on, timeType)}
            </td>
        </tr>
    );
};

export default RedirectItem;