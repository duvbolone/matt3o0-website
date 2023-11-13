"use client";
import { useEffect, useState } from 'react';
import styles from './new_tab.module.css';
import Clock from './clock';

const imageUrls = [
    'https://source.unsplash.com/fC_Hwry9V2w',
    'https://source.unsplash.com/oPfWsUmBJV4',
    'https://source.unsplash.com/uOmHK8jVRtU',
    'https://source.unsplash.com/yi25dxeKxEI',
    'https://source.unsplash.com/PlJlSziIWEw'
];

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

function NewTab() {
    const [backgroundImageUrl, setBackgroundImageUrl] = useState<string>('');

    function getRandomImageUrl(): string {
        let randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
        if (randomImageUrl === backgroundImageUrl) {
            console.log("Fuck yçaou!")
            return getRandomImageUrl();
        } else {
            return randomImageUrl;
        }
    }

    useEffect(() => {
        const updateImage = async () => {
            const randomImageUrl = getRandomImageUrl();
            let backgroundElement = document.getElementById("clockHolder");
            let holderElement = document.getElementById("main");

            if (backgroundElement && holderElement) {
                backgroundElement.style.backdropFilter = "brightness(0%)";
                holderElement.style.filter = "brightness(75%)";
            }

            await sleep(5000);
            setBackgroundImageUrl(randomImageUrl);

            if (backgroundElement && holderElement) {
                backgroundElement.style.backdropFilter = "brightness(70%)";
                holderElement.style.filter = "brightness(100%)";
            }
        };

        updateImage();
        const intervalId = setInterval(updateImage, 10000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <main className={styles.main} style={{ backgroundImage: `url('${backgroundImageUrl}')` }} id="main"><div className={styles.clock_holder} id="clockHolder"><Clock></Clock></div></main>
    )
}

export default NewTab;