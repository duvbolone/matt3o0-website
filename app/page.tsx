import TypingController from "@/components/typing_text/controller";
import styles from "./home.module.css";
import { jetbrains } from "@/components/fonts";
import InfoCard from "@/components/card/card";
import { MaskedLink } from "@/components/link";

export const metadata = {
    title: 'Home - Matt3o0‘s website',
    description: 'This website tells you a bit more about Matt3o0.',
}

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.typingTextHolder}>
                <span style={{ marginInline: "0.3em" }}>I ❤️</span>
                <span className={`${styles.typingText} ${jetbrains.className}`}>
                    <TypingController texts={["aviation", "computers", "space", "rockets", "engines"]} speed={150} />
                </span>
            </div>
            <div className={styles.cards}>
                <InfoCard title="Aviation" emoji="✈️"><p>Planes, helicopters, you name it. I like them all, and like to fly them in the simulator too, most of the time without crashing...</p></InfoCard>
                <InfoCard title="Computers" emoji="🖥️"><p>They're everywhere nowadays, and absolutely amazing! In my free time I like to program them or play on them. You can check if one of mine is alive <MaskedLink title="here" url="https://local-status.vercel.app/" /> </p></InfoCard>
            </div>
            <div style={{ minHeight: "20vh" }}></div>
        </main>
    )
}
