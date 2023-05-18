import { robotoMono } from "@/app/layout"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="flex flex-col lg:flex-row lg:space-x-40 p-5  bg-m27v3 dark:bg-black align-items-center">
            <h1 className={robotoMono.className + " py-2 text-4xl text-white"}>Matt3o0</h1>
            <ul className="text-slate-500">
                <h1 className={robotoMono.className + " py-2 text-2xl text-slate-300"}>Pages</h1>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/about">Projects</Link></li>
            </ul>
            <ul className="text-slate-500">
                <h1 className={robotoMono.className + " py-2 text-2xl text-slate-300"}>Socials</h1>
                <li><a href="https://github.com/duvbolone" target="_blank">GitHub</a></li>
                <li><a href="https://discord.com/users/668874138160594985" target="_blank">Discord</a></li>
                <li><a href="https://twitter.com/Matt3o044" target="_blank">Twitter</a></li>
            </ul>
            <div className="flex">
                <p className="max-w-lg text-xs text-neutral-500 dark:text-neutral-800 self-end">
                    © 2023 Matt3o0. This website's source code is licensed under the <strong><a href="https://mit-license.org/" target="_blank">MIT License</a></strong>.
                </p>
            </div>
        </footer>
    )
}