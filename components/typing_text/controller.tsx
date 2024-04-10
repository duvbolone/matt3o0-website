"use client";
import { useState } from "react";
import TypingText, { TypingTextProps } from "./typing";
import styles from "./controller.module.css";

const TypingController: React.FC<TypingTextProps> = ({ texts, speed }) => {
    const [adjSpeed, setAdjSpeed] = useState<number>(speed);

    function decreaseSpeed() {
        if (adjSpeed - 50 >= 100) {
            setAdjSpeed(adjSpeed - 50);
        }
    }

    function increaseSpeed() {
        if (adjSpeed + 50 <= 950) {
            setAdjSpeed(adjSpeed + 50);
        }
    }

    return <div>
        <TypingText texts={texts} speed={adjSpeed} />
        <div className={styles.controller}>
            <button className={styles.button} onClick={decreaseSpeed}>-</button>
            <p>{adjSpeed}<span style={{ fontWeight: 'lighter' }}>ms</span></p>
            <button className={styles.button} onClick={increaseSpeed}>+</button>
        </div>
    </div >
}

export default TypingController;