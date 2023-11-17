'use client';

import { useEffect, useState } from "react";
import styles from "./clock.module.css";
import { getCookie, setCookie } from 'cookies-next';
import { jetbrains } from "../fonts";
import Image from "next/image";
import Shortcuts from "./shortcuts/shortcuts";

function getCookieState(name: string): boolean {
    const cookie = getCookie(name);

    return cookie ? true : false;
}

function setCookieState(name: string, state: boolean) {
    setCookie(name, state, { maxAge: 365 * 24 * 60 * 60 });
}

function Clock() {
    const [formatLocale, setFormatLocale] = useState<boolean>(getCookieState("newTabLocale"));
    const [formatLength, setFormatLength] = useState<boolean>(getCookieState("newTabFormatLength"));
    const [formattedDate, setFormattedDate] = useState<string>("-");
    const [formattedTime, setFormattedTime] = useState<string>("--:--:--");

    const timeOptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };

    useEffect(() => {
        const dateOptions: Intl.DateTimeFormatOptions = { month: formatLength ? 'long' : 'short', day: '2-digit', weekday: formatLength ? 'long' : 'short' };
        const dateFormatter = new Intl.DateTimeFormat(formatLocale ? undefined : 'en-GB', dateOptions);
        const timeFormatter = new Intl.DateTimeFormat(formatLocale ? undefined : 'en-GB', timeOptions);

        const updateTime = () => {
            const now = new Date();
            setFormattedTime(timeFormatter.format(now));
        };

        const updateDate = () => {
            const now = new Date();
            setFormattedDate(dateFormatter.format(now));
        };

        updateTime();
        updateDate();

        const dateIntervalId = setInterval(updateDate, 60000);
        const timeIntervalId = setInterval(updateTime, 250);

        const clearIntervals = () => {
            clearInterval(timeIntervalId);
            clearInterval(dateIntervalId);
        }
        return () => clearIntervals();
    }, [formatLocale, formatLength]);

    function changeLocale() {
        setFormatLocale(!formatLocale);
        setCookieState("newTabLocale", !formatLocale);
    }

    function changeFormatLength() {
        setFormatLength(!formatLength);
        setCookieState("newTabFormatLength", !formatLength);
    }

    return (<div className={jetbrains.className + ' ' + styles.holder}>
        <div className={styles.clockNdate}>
            <p className={styles.clock}>{formattedTime}</p>
            <p className={styles.date}>{formattedDate}</p>
        </div>
        <div style={{ height: '20vh' }}></div>
        <Shortcuts></Shortcuts>
        <div style={{ display: 'flex', gap: '8px', margin: '4em' }}>
            <button onClick={changeLocale} className={styles.localeButton}>
                <Image src="/icons/language.svg" alt="Language" width="128" height="128" className="h-7 w-7" />
            </button>
            <button onClick={changeFormatLength} className={styles.localeButton}>
                <Image src="/icons/width.svg" alt="Width" width="128" height="128" className="h-7 w-7" />
            </button>
        </div>
    </div>);
}

export default Clock;