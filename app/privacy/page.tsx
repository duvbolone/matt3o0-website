import { h1Class, h2Class, infoBoxClass } from "@/components/classes";
import IconLink from "@/components/link";

export const metadata = {
    title: 'Privacy - Matt3o0‘s website',
    description: 'This website tells you a bit more about Matt3o0.',
}

export default function Privacy() {
    return (
        <main className="p-10 grid place-items-center">
            <h1 className={h1Class} id="top">Privacy</h1>
            <p className={infoBoxClass + "divide-y"}>
                This website is hosted by <IconLink url="https://vercel.com/" title="Vercel" /> and uses its Web Analytics for analytics.
                The <IconLink url="https://vercel.com/docs/analytics/privacy-policy/" title="Privacy Policy" /> and the relevant documentation explain how your data is collected and what happens with it.
            </p>
            <h2 className={h2Class}>Stored Information</h2>
            <div className={infoBoxClass}>
                The following information may be stored with every visit to this site:
                <ul className="px-7 py-2 list-disc font-semibold">
                    <li><strong>Event Timestamp</strong> : The time of your visit.</li>
                    <li><strong>URL</strong> : The URL of the visited page.</li>
                    <li><strong>Referrer</strong> : The website or service that brought you here.</li>
                    <li><strong>Geolocation</strong> : The country you are visiting the website from (based on IP).</li>
                    <li><strong>Device OS &amp; Version</strong> : The Operating System (OS) you are using to visit the website.</li>
                    <li><strong>Browser &amp; Version</strong> : The browser you are using.</li>
                    <li><strong>Device Type</strong> : The type of device you are using.</li>
                </ul>
            </div>
        </main>
    )
}