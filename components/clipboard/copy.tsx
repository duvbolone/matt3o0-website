"use client";
import styles from "./copy.module.css";

const CopyToClipboard: React.FC<{ text: string }> = ({ text }) => {
    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
    async function copy() {
        navigator.clipboard.writeText(text);

        const icon = document.getElementById("copy_button_icon");
        if (!icon) {
            return
        }

        icon.classList.add(styles.icon_vanish);
        await sleep(500);
        icon.textContent = "done";
        await sleep(2000);
        icon.classList.remove(styles.icon_vanish);
        await sleep(300);
        icon.classList.add(styles.icon_vanish_fast);
        await sleep(300);
        icon.textContent = "content_copy";
        await sleep(700);
        icon.classList.remove(styles.icon_vanish_fast);


    }

    return <button onClick={copy} title="Copy text!" id="copy_button"><span className="material-symbols-outlined" id="copy_button_icon">content_copy</span></button>
}

export default CopyToClipboard;