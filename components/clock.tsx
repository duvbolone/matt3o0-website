'use client';

import { useEffect, useState } from "react";
import styles from "./clock.module.css";
import { rubik } from "./fonts";

function Clock() {
    const [formattedDate, setFormattedDate] = useState<string>("00:00:00");

    const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };

    const dateFormatter = new Intl.DateTimeFormat('en-GB', options);

    useEffect(() => {
        const updateDate = () => {
            const now = new Date();
            setFormattedDate(dateFormatter.format(now));
        };

        const intervalId = setInterval(updateDate, 1000);

        return () => clearInterval(intervalId);
    }, [dateFormatter]);

    return (<p className={rubik.className + ' ' + styles.clock}>{formattedDate}</p>);
}

export default Clock;