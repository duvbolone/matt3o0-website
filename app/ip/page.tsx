import CopyToClipboard from "@/components/clipboard/copy";
import styles from "./ip.module.css";
import { jetbrains } from "@/components/fonts";
import { headers } from "next/headers";

export const metadata = {
    title: 'IP - Matt3o0‘s website',
    description: 'This website tells you a bit more about Matt3o0.',
}

export default function IPDisplay() {
    const header = headers()
    const ip = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]

    return (
        <main className={styles.main}>
            <h1 className={styles.ip}>{ip}</h1>
            <div className={styles.clipboard}><CopyToClipboard text={ip} /></div>
            <div style={{ minHeight: "40vh" }}></div>
        </main>
    )
}
