import Link from "next/link"
import Image from "next/image";
import { cardButtonClass, cardClass, cardHeaderClass, cardPgClass } from "@/components/classes";

export const metadata = {
    title: 'Home - Matt3o0‘s website',
    description: 'This website tells you a bit more about Matt3o0.',
}

export default function Home() {
    return (
        <main>
            <div className="grid justify-items-center py-20 text-6xl space-y-10">
                <h1 className="transition duration-[5s] ease-in-out p-3 text-transparent bg-clip-text r-gradient-heading lg:hover:scale-150">Welcome wanderer!</h1>
                <p className="p-3 text-2xl text-slate-500">Let me show you what to do here</p>
                <div className="flex flex-col lg:flex-row place-items-center space-y-3 lg:space-x-5 lg:space-y-0 text-2xl">
                    <div className={cardClass}>
                        <div>
                            <h1 className={cardHeaderClass}>About Me</h1>
                            <p className={cardPgClass}>Check out what kind of weird human being I am.</p>
                        </div>
                        <Link href="/about"><button className={cardButtonClass}><Image src="/icons/arrow_outward.svg" alt="Arrow pointing right-top" width="64" height="64" className="h-5 w-5"/>About</button></Link>
                    </div>
                    <div className={cardClass}>
                        <div>
                            <h1 className={cardHeaderClass}>My Projects</h1>
                            <p className={cardPgClass}>Take a look at what I have made, or what I am making.</p>
                        </div>
                        <Link href="/projects"><button className={cardButtonClass}><Image src="/icons/arrow_outward.svg" alt="Arrow pointing right-top" width="64" height="64" className="h-5 w-5"/>Projects</button></Link>
                    </div>
                    <div className={cardClass}>
                        <div>
                            <h1 className={cardHeaderClass}>Website Source Code</h1>
                            <p className={cardPgClass}>The source code of this website, if you're interested in bad code.</p>
                        </div>
                        <Link href="https://github.com/duvbolone/matt3o0-website"><button className={cardButtonClass}><Image src="/icons/arrow_outward.svg" alt="Arrow pointing right-top" width="64" height="64" className="h-5 w-5"/>Source Code</button></Link>
                    </div>
                </div>
            </div>
            <div className="lg:h-[24rem]"></div>
        </main>
    )
}
