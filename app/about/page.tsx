import Link from "next/link";
import Image from "next/image";

const infoBoxClass = "p-2 shadow-lg border border-m27v3-200 dark:border-slate-900 transition duration-200 hover:dark:bg-neutral-950 hover:shadow-m27v3-200 hover:dark:shadow-neutral-950 hover:shadow-glow-lg transform-gpu rounded-lg text-lg max-w-2xl";
const faviconPreviews = "h-4 w-4 inline relative bottom-0.5"

export const metadata = {
    title: 'About - Matt3o0‘s website',
    description: 'This website tells you a bit more about Matt3o0.',
}

function getFavicon(url: string, size: number){
    return `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=${size}`
}

export default function About() {
    return (
        <main className="p-10 grid place-items-center">
            <h1 className="p-3 text-6xl text-black dark:text-m27v1 text-center">About</h1>
            <h2 className="p-3 text-4xl text-black dark:text-m27v1 text-center">Quick Information</h2>
            <div className={infoBoxClass}>
                <p className="flex">
                    My time: <iframe title="Time in Brussels (CE(S)T Time Zone)" className="relative top-1" src="https://free.timeanddate.com/clock/i8uraeqx/n48/tlbe/fn6/fs18/fc94a3b8/tct/pct/ftb/ta1" height="18" width="130" allowTransparency={true}></iframe>
                </p>
                <p>
                    My birthday: <strong className="text-slate-400">20th of May</strong>
                </p>
            </div>
            <h2 className="p-3 text-4xl text-black dark:text-m27v1 text-center">Biography</h2>
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
            <h2 id="website" className="p-3 text-4xl text-black dark:text-m27v1 text-center">Website Information</h2>
            <div className={infoBoxClass}>
                <p>
                    This website is created using <a href="https://nextjs.org/" target="_blank">
                        <Image src={getFavicon("https://nextjs.org", 32)} width="32" height="32" alt="Next.js logo" className={faviconPreviews} />
                        <strong>Next.js</strong>
                    </a> and <a href="https://tailwindcss.com/" target="_blank">
                        <Image src={getFavicon("https://tailwindcss.com", 32)} width="32" height="32" alt="Tailwind CSS logo" className={faviconPreviews} />
                        <strong>Tailwind CSS</strong>
                    </a>.
                </p>
                <p>
                    Hosting is provided by <a href="https://vercel.com" target="_blank">
                        <Image src={getFavicon("https://vercel.com", 32)} width="32" height="32" alt="Vercel logo" className={faviconPreviews} />
                        <strong>Vercel</strong> </a> and the 
                        domain by <a href="https://is-a.dev" target="_blank">
                        <strong>is-a.dev</strong>
                    </a>.
                </p>
                <p className="py-1">
                    Source code is available on <a href="https://github.com/duvbolone/duvbolone.github.io" target="_blank">
                        <Image src="/icons/github-mark-white.png" width="32" height="32" alt="GitHub logo" className={faviconPreviews}/>
                        <strong>GitHub</strong>
                    </a> under the <strong><a href="https://mit-license.org/" target="_blank"><Image src={getFavicon("https://mit-license.org", 32)} width="32" height="32" alt="Vercel logo" className={faviconPreviews} />MIT License</a></strong>.
                </p>
                <p className="py-2">
                    Thank you to all these organizations for their amazing services!
                </p>
            </div>
        </main>
    )
}