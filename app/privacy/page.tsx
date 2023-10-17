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
                All saved data is for analytic purposes only. The only way I (Matt3o0) will have access to it is via the Vercel dashboard. The data will not and will never be sold to any company or organization.
                <IconLink url="https://vercel.com/docs/concepts/analytics/privacy-policy" title="Vercel Web Analytics: Privacy Policy" />
            </p>
            <h2 className={h2Class}>Stored Information</h2>
            <div className={infoBoxClass}>
                The following information may be stored with every visit to this site:
                <ul className="px-7 py-2 list-disc font-semibold">
                    <li><strong>Event Timestamp</strong> : When did you visit.</li>
                    <li><strong>URL</strong> : What page you are on.</li>
                    <li><strong>Referrer</strong> : Where did you come from.</li>
                    <li><strong>Geolocation</strong> : Where do you live (country only).</li>
                    <li><strong>Device OS &amp; Version</strong> : What OS are you using.</li>
                    <li><strong>Browser &amp; Version</strong> : What browser are you using</li>
                    <li><strong>Device Type</strong> : What type of device are you using (mobile, desktop, tablet).</li>
                </ul>
            </div>
        </main>
    )
}