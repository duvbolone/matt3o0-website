import Link from "next/link";
import Image from "next/image";
import { infoBoxClass, faviconPreviews, linkClass, h1Class, h2Class } from'@/components/classes';

export const metadata = {
    title: 'About - Matt3o0‘s website',
    description: 'This website tells you a bit more about Matt3o0.',
}

function getFavicon(url: string, size: number) {
    return `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=${size}`
}



export default function About() {
    return (
        <main className="p-10 grid place-items-center">
            <h1 className={h1Class}>About</h1>
            <h2 className={h2Class}>Quick Information</h2>
            <div className={infoBoxClass}>
                <p className="flex">
                    My time: <iframe title="Time in Brussels (CE(S)T Time Zone)" className="relative top-0.5" src="https://free.timeanddate.com/clock/i8uraeqx/n48/tlbe/fn6/fs18/fc94a3b8/tct/pct/ftb/ta1" height="18" width="130" allowTransparency={true}></iframe>
                </p>
                <p>
                    My birthday: <strong className="text-slate-400">20th of May</strong>
                </p>
            </div>
            <h2 className={h2Class}>Biography</h2>
            <div className={infoBoxClass}>
                I live in Belgium, speak English, Dutch, Italian(I'm half Italian) and a bit of French.
                When I game it's usually X-Plane, Minecraft, ETS2 or Universe Sandbox.
                I'm interested in quite a bit of subjects too, like:
                <ul className="px-8 list-disc">
                    <li>🛩️ Aviation</li>
                    <li>🔭 Astronomy</li>
                    <li>📸 (Astro)photography</li>
                    <li>🗣️ Languages</li>
                    <li>💻 Everything computers</li>
                </ul>

                More on the 'Everything computers' part: I like coding, and use Python, C++ and JavaScript. Lua is a prominent contributor to my coding time too.
            </div>
            <h2 id="website" className={h2Class}>Website Information</h2>
            <div className={infoBoxClass}>
                <p>
                    This website is created using <a href="https://nextjs.org/" target="_blank" className={linkClass}>
                        <Image src={getFavicon("https://nextjs.org", 32)} width="32" height="32" alt="Next.js logo" className={faviconPreviews} />
                        <strong>Next.js</strong>
                    </a> and <a href="https://tailwindcss.com/" target="_blank" className={linkClass}>
                        <Image src={getFavicon("https://tailwindcss.com", 32)} width="32" height="32" alt="Tailwind CSS logo" className={faviconPreviews} />
                        <strong>Tailwind CSS</strong>
                    </a>.
                </p>
                <p>
                    Hosting is provided by <a href="https://vercel.com" target="_blank" className={linkClass}>
                        <Image src={getFavicon("https://vercel.com", 32)} width="32" height="32" alt="Vercel logo" className={faviconPreviews} />
                        <strong>Vercel</strong> </a> and the
                    domain by <a href="https://is-a.dev" target="_blank" className={linkClass}>
                        <strong>is-a.dev</strong>
                    </a>.
                </p>
                <p className="py-1">
                    Source code is available on <a href="https://github.com/duvbolone/duvbolone.github.io" target="_blank" className={linkClass}>
                        <Image src="/icons/github-mark-white.png" width="32" height="32" alt="GitHub logo" className={faviconPreviews} />
                        <strong>GitHub</strong>
                    </a> under the <strong><a href="https://mit-license.org/" target="_blank" className={linkClass}><Image src={getFavicon("https://mit-license.org", 32)} width="32" height="32" alt="Vercel logo" className={faviconPreviews} />MIT License</a></strong>.
                </p>
                <p className="py-2">
                    Thank you to all these organizations for their amazing services!
                </p>
            </div>
        </main>
    )
}