import { infoBoxClass, linkClass, h1Class, h2Class } from '@/components/classes';
import IconLink from "@/components/link";

export const metadata = {
    title: 'About - Matt3o0‘s website',
    description: 'This website tells you a bit more about Matt3o0.',
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
            <h2 className={h2Class}>Me</h2>
            <div className={infoBoxClass}>
                I live in Belgium, speak English, Dutch, Italian (I'm half Italian) and a bit of French.
                When I game it's usually X-Plane, Minecraft, ETS2 or Universe Sandbox.
                I'm interested in quite a bit of subjects too, like:
                <ul className="px-8 list-disc">
                    <li>🛩️ Aviation</li>
                    <li>🔭 Astronomy</li>
                    <li>📸 (Astro)photography</li>
                    <li>🗣️ Languages</li>
                    <li>💻 Everything computers</li>
                </ul>
            </div>
            <h2 id="website" className={h2Class}>Website Information</h2>
            <div className={infoBoxClass}>
                <p>
                    This website is created using <IconLink url="https://nextjs.org/" title="Next JS" /> and <IconLink url="https://tailwindcss.com/" title="Tailwind CSS" />.
                </p>
                <p>
                    Hosting is provided by <IconLink url="https://vercel.com/" title="Vercel" /> and the
                    domain by <a href="https://is-a.dev" target="_blank" className={linkClass}>
                        <strong>is-a.dev</strong>
                    </a>.
                </p>
                <p className="py-1">
                    Source code is available on <IconLink url="https://github.com/duvbolone/matt3o0-website" title="GitHub" /> under the <IconLink url="https://mit-license.org/" title="MIT-license" />.
                </p>
                <p className="py-2">
                    Thank you to all these organizations for their amazing services!
                </p>
            </div>
        </main>
    )
}