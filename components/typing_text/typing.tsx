"use client";
import { useEffect, useState } from "react";

export interface TypingTextProps {
    texts: Array<string>,
    speed: number
}

function getRandomElement(texts: Array<string>, avoid: string | undefined = undefined): string {
    const len = texts.length;

    let newText = texts[Math.min((len - 1), Math.max(0, Math.floor(Math.random() * len)))];

    if (newText !== avoid && newText) {
        return newText;
    } else {
        return getRandomElement(texts, avoid);
    }
}

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
let busy = false;

const TypingText: React.FC<TypingTextProps> = ({ texts, speed }) => {
    const [current_text, setText] = useState<string>("  ");
    const [target, setTarget] = useState<string>(getRandomElement(texts, ""));
    const [index, setIndex] = useState<number>(0);
    const textId = `typing-text-${Math.floor(speed)}-${texts.length}`;

    useEffect(() => {
        async function update() {
            if (busy) {
                return;
            }

            busy = true;

            if (index >= target.length) {
                setIndex(0);
                setText("  ");
                setTarget(getRandomElement(texts, target));

                await sleep(speed * 2);

                busy = false;
                return;
            }

            setText(current_text + target[index]);
            setIndex(index + 1);

            const delay = Math.floor(speed * 1.5 - Math.random() * speed);

            await sleep(delay);

            busy = false;
        }

        const interval = setInterval(update, speed);

        return () => clearInterval(interval);
    }, [current_text]);

    return <p id={textId} style={{ minHeight: "1.7em" }}>{current_text}</p>
}

export default TypingText;