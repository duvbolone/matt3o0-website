"use client";
import { getCookie, setCookie } from 'cookies-next';
import styles from './shortcuts.module.css';
import { useEffect, useState } from 'react';
import { inter, jetbrains } from '@/components/fonts';
import Image from 'next/image';
import Link from "next/link";
import { getFavicon } from "@/components/link";
import { randomBytes } from 'crypto';

const generateUUID = (): string => {
    const bytes = randomBytes(16); // 16 bytes = 128 bits

    // Set version (4) and variant (RFC4122) bits
    bytes[6] = (bytes[6] & 0x0f) | 0x40; // Version 4 (0100xxxx)
    bytes[8] = (bytes[8] & 0x3f) | 0x80; // Variant RFC4122 (10xxxxxx)

    // Convert bytes to hexadecimal string format
    const uuid = bytes.toString('hex').match(/(.{8})(.{4})(.{4})(.{4})(.{12})/);
    if (uuid) {
        uuid.shift(); // Remove the first element (the whole match)

        return uuid.join('-'); // Format UUID (8-4-4-4-12)
    } else {
        return "null";
    }
};


type Shortcut = {
    url: string,
    name: string,
    id: string,
}

function Shortcuts() {
    const [shortcuts, setShortcuts] = useState<Array<Shortcut>>([]);
    const [isAdding, setIsAdding] = useState<boolean>(false);
    const [newShortcutURLMessage, setNewShortcutURLMessage] = useState<string>('');

    function addShortcut(item: Shortcut) {
        const new_shortcuts = shortcuts.concat([item]);
        setCookie('shortcuts', new_shortcuts);
        setShortcuts(new_shortcuts);
    }


    const ShortcutItem = ({ item }: { item: Shortcut }) => {
        function removeShortcut() {
            const new_shortcuts = shortcuts.filter((s) => { return s.id !== item.id });
            setCookie('shortcuts', new_shortcuts);
            setShortcuts(new_shortcuts);
        }

        return (
            <div className={styles.item}>
                <Link href={item.url}>
                    <div className={styles.iconBg}>
                        <img src={getFavicon(item.url, 128)} className={styles.icon} height={64} width={64} />
                    </div>
                </Link>
                <p>{item.name}<button onClick={removeShortcut} className={styles.remove}>-</button></p>
            </div>
        );
    };

    useEffect(
        () => {
            const shortcuts = getCookie('shortcuts');
            if (shortcuts) {
                setShortcuts(JSON.parse(shortcuts.toString()));
            }
        }
        , []);

    async function handleAdd(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let nameElement = document.getElementById("newShortcutName") as HTMLInputElement | null;
        let urlElement = document.getElementById("newShortcutURL") as HTMLInputElement | null;

        if (urlElement && nameElement) {
            let name = nameElement.value;
            let url = urlElement.value;

            if (url && name) {
                try {
                    new URL(url);
                } catch {
                    setNewShortcutURLMessage("Invalid URL provided!");
                    return;
                }

                let shortcut = { url: url, name: name.slice(0, 12), id: generateUUID() };
                addShortcut(shortcut);
                setIsAdding(false);
                setNewShortcutURLMessage("");
            }
        }

    }

    if (isAdding) {
        return <div className={styles.formHolder + ' ' + inter.className}>
            <form className={styles.form} onSubmit={handleAdd}>
                <h1 className={styles.header}>Add New Shortcut</h1>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Name</label>
                    <input required placeholder='example.com' id="newShortcutName" className={styles.input + ' ' + jetbrains.className} />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>
                        URL</label>
                    <input required placeholder='https://example.com/' id="newShortcutURL" className={styles.input + ' ' + jetbrains.className} />
                    <p id="newShortcutURLMessage" className={styles.message}>{newShortcutURLMessage}</p>
                </div>
                <div className={styles.bottomButtons}>
                    <button className={styles.addButton} type="submit">Add</button>
                    <button className={styles.cancelButton} onClick={() => { setIsAdding(false); setNewShortcutURLMessage(""); }}>Cancel</button>
                </div>
            </form>
        </div>
    } else {
        let shortcuts_items = shortcuts.map((item) => (<ShortcutItem item={item}></ShortcutItem>));
        return <div className={styles.hold + ' ' + inter.className}>{shortcuts_items}<button className={styles.item} onClick={() => { setIsAdding(true) }} title="Add new shorcut"><div className={styles.iconBg}><Image src="/icons/add.svg" alt="Add new shortcut" width="32" height="32" className={styles.icon} /></div><p>Add New</p></button></div>
    }
}

export default Shortcuts;