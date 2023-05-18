import { robotoMono } from "@/app/layout"
import Link from "next/link"

export default function NavBar() {
    const linkButtonClass = "p-2 rounded-full bg-m27v4 text-white dark:hover:text-white hover:bg-m27v2 active:bg-m27v4";
    return (
        <nav className={robotoMono.className + " flex p-6 sticky top-0 backdrop-blur-[2px] z-50"}>
            <Link href="/" className="space-x-2 flex">
                <img src="/M27.png" alt="M27 - The Dumbbell Nebula" className="h-14 w-14 rounded-full"></img>
                <h1 className="py-2 text-4xl text-m27v2 dark:text-m27v3">Matt3o0</h1>
            </Link>
            <div className="px-10 space-x-4 hidden text-2xl right-0 absolute lg:flex">
                <Link href="/about">
                    <button className={linkButtonClass} title="About" type="button">about</button>
                </Link>
                <Link href="/projects">
                    <button className={linkButtonClass} title="Projects" type="button">projects</button>
                </Link>
                <div className="space-x-2">
                    <a href="https://github.com/duvbolone" target="_blank">
                        <button className={linkButtonClass} title="GitHub account" type="button">
                            <img src="icons/github-mark-white.png" alt="github" className="lg:h-8"></img>
                        </button>
                    </a>
                    <a href="https://discord.com/users/668874138160594985" target="_blank">
                        <button className={linkButtonClass} title="Discord account" type="button">
                            <div className="h-8 w-8">
                                <img src="icons/discord-mark-white.png" alt="discord" className="h-2 lg:h-6 relative top-1"></img>
                            </div>
                        </button>
                    </a>
                </div>
            </div>
        </nav>
    );
}