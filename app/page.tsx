import Link from "next/link"
import Image from "next/image";

export const metadata = {
    title: 'Home - Matt3o0‘s website',
    description: 'This website tells you a bit more about Matt3o0.',
}

const cardClass = "transition ease-in-out duration-500 w-11/12 lg:w-auto p-3 space-y-3 flex flex-col rounded-lg text-slate-400 bg-gradient-to-bl from-gray-100 to-gray-200 dark:from-m27v4 dark:to-m27v2 hover:bg-gradient-to-bl hover:from-m27v5-200 hover:to-m27v5-600 hover:dark:from-m27v5-600 hover:dark:to-m27v5-950 hover:shadow-m27v5-950 hover:shadow-glow-md hover:scale-105";
const cardHeaderClass = "text-lg text-m27v3-400";
const cardPgClass = "text-m27v1 text-sm";

const linkButtonClass = "flex space-x-3 p-2 text-m27v3-400 rounded-full bg-transparent hover:border hover:border-m27v3-400 dark:border-m27v3-400 hover:border-2 text-sm hover:border-m27v3-900 hover:text-m27v1 active:bg-m27v3-900 active:border-m27v3-900";

export default function Home() {
    return (
        <main>
            <div className="grid justify-items-center py-20 text-6xl space-y-10">
                <h1 className="p-3 text-transparent bg-clip-text bg-gradient-to-tr from-m27v4-600 from-25% via-m27v3 via-50% to-m27v5-600 to-75%">Welcome wanderer!</h1>
                <p className="p-3 text-2xl text-slate-500">Let me show you what to do here</p>
                <div className="flex flex-col lg:flex-row place-items-center space-y-3 lg:space-x-5 lg:space-y-0 text-2xl">
                    <div className={cardClass}>
                        <div>
                            <h1 className={cardHeaderClass}>About Me</h1>
                            <p className={cardPgClass}>Check out what kind of weird human being I am.</p>
                        </div>
                        <Link href="/about"><button className={linkButtonClass}><Image src="/icons/arrow_outward.svg" alt="Arrow pointing right-top" width="64" height="64" className="h-5 w-5"/>About</button></Link>
                    </div>
                    <div className={cardClass}>
                        <div>
                            <h1 className={cardHeaderClass}>My Projects</h1>
                            <p className={cardPgClass}>Take a look at what I have made, or I am making.</p>
                        </div>
                        <Link href="/projects"><button className={linkButtonClass}><Image src="/icons/arrow_outward.svg" alt="Arrow pointing right-top" width="64" height="64" className="h-5 w-5"/>Projects</button></Link>
                    </div>
                    <div className={cardClass}>
                        <div>
                            <h1 className={cardHeaderClass}>Website Source Code</h1>
                            <p className={cardPgClass}>The source code of this website, if you're interested in bad code.</p>
                        </div>
                        <Link href="https://github.com/duvbolone/matt3o0-website"><button className={linkButtonClass}><Image src="/icons/arrow_outward.svg" alt="Arrow pointing right-top" width="64" height="64" className="h-5 w-5"/>Source Code</button></Link>
                    </div>
                </div>
            </div>
            <div className="lg:h-[24rem]"></div>
        </main>
    )
}
