import { robotoMono } from "./fonts";
import { link } from "fs"
import Link from "next/link"

const linkClass = "no-underline hover:underline";

export default function Footer() {
    return (
        <footer className="flex flex-row flex-wrap lg:space-x-40 p-5  bg-m27v3 dark:bg-black align-items-center">
            <h1 className={robotoMono.className + " hidden md:inline py-2 text-4xl text-m27v1"}>Matt3o0</h1>
            <ul className="p-3 text-slate-500rounded-lg">
                <h1 className={robotoMono.className + " py-2 text-2xl text-slate-300"}>Pages</h1>
                <li><Link href="/" className={linkClass}>Home</Link></li>
                <li><Link href="/privacy" className={linkClass}>Privacy</Link></li>
                <li><Link href="/redirects" className={linkClass}>Redirects</Link></li>
                <li><Link href="/ip" className={linkClass}>IP</Link></li>
                <li><Link href="/new_tab" className={linkClass}>New Tab Project</Link></li>
            </ul>
            <ul className="p-3 text-slate-500rounded-lg">
                <h1 className={robotoMono.className + " py-2 text-2xl text-slate-300"}>Socials</h1>
                <li><a href="https://github.com/duvbolone" target="_blank" className={linkClass}>GitHub</a></li>
                <li><a href="https://discord.com/users/668874138160594985" target="_blank" className={linkClass}>Discord</a></li>
                <li><a href="https://twitter.com/Matt3o044" target="_blank" className={linkClass}>Twitter</a></li>
                <li><a href="https://steamcommunity.com/profiles/76561199103441618" target="_blank" className={linkClass}>Steam</a></li>
            </ul>
            <div className="flex">
                <p className="max-w-lg text-xs text-neutral-500 dark:text-neutral-800 self-end">
                    © 2024 Matt3o0. This website's source code is licensed under the <strong><a href="https://mit-license.org/" target="_blank">MIT License</a></strong>.
                </p>
            </div>
        </footer>
    )
}