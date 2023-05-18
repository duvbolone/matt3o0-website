import Image from "next/image";
import Link from "next/link";

const showcaseImageGridClass = "scale-gpu transition ease-in-out duration-200 rounded-2xl w-[95%] lg:w-[30%] lg:h-[100%] hover:scale-105 shadow-lg";
const showcaseImageClass = "scale-gpu transition ease-in-out duration-200 rounded-2xl lg:w-[70%] lg:h-[100%] hover:scale-105 shadow-lg";
const showcaseVideoClass = "scale-gpu transition ease-in-out duration-200 rounded-2xl w-[95%] h-[170px] lg:w-[30%] lg:h-[280px] hover:scale-105 shadow-lg";
const showcaseImageCodeClass = "scale-gpu transition ease-in-out duration-200 rounded-2xl w-[110%] lg:w-[70%] lg:h-[100%] hover:scale-105";
const linkButtonClass = "p-2 rounded-full bg-m27v4 text-white dark:hover:text-white hover:bg-m27v5-900 active:bg-m27v5-800";

export default function Projects() {
    return (
        <main id="top" className="p-10 grid place-items-center">
            <h1 className="p-3 text-6xl text-black dark:text-white">Projects</h1>
            <ol className="list-disc text-lg lg:text-base">
                <li><Link href="/projects#clearfly">ClearFly</Link></li>
                <li><Link href="/projects#xpdrefjson">X-Plane-DatarefJSON</Link></li>
                <li><Link href="/projects#my-website">My Website</Link> <span className="text-slate-500">(This website)</span></li>
            </ol>
            <div className="h-[10rem]"></div>
            <div className="flex flex-col space-y-40">
                <div id="clearfly" className="grid place-items-center">
                    <div className="flex">
                        <Image src="/projects/clearfly/logo.png" className="h-10 w-10 relative top-2.5" width="128" height="128" alt="ClearFly Logo"></Image>
                        <h2 className="p-3 text-4xl text-black dark:text-white">ClearFly</h2>
                    </div>
                    <div className="flex flex-col place-items-center">
                        <p className="max-w-2xl text-xl lg:text-base">
                            ClearFly is a group that is making a high-quality Boeing 737-100 for the X-Plane flight simulator.
                            They are maintaining a Virtual Airline too, called the ClearFly VA.
                            Their current fleet consists of B737-800s, B737-200s and A300-600s, all equiped with beautiful liveries.
                            My role at ClearFly is programming systems, doing some Plane Maker stuff and developing the Discord bot of the ClearFly Discord server, ClearBot.
                        </p>
                        <div className="flex flex-col py-2 lg:p-10 lg:py-10 space-y-3 lg:space-y-0 lg:flex-row lg:space-x-10 lg:place-items-center">
                            <Image width="540" height="960" alt="ClearFly 737-100 Tail" className={showcaseImageGridClass} src="https://media.discordapp.net/attachments/965597725519405106/1095072971980288000/737-100_-_2023-04-10_15.46.30.png"></Image>
                            <Image width="540" height="960" alt="ClearFly 737-100 at sunset" className={showcaseImageGridClass} src="https://cdn.discordapp.com/attachments/965597725519405106/1069383472084439141/737-100_-_2023-01-29_17.22.40.png"></Image>
                            <iframe className={showcaseVideoClass + " h-[900px]"} src="https://www.youtube.com/embed/MEBqklSR100" width="540" height="960"></iframe>
                        </div>
                        <div className="flex flex-col py-2 lg:p-10 lg:py-10 space-y-3 lg:space-y-0 lg:flex-row lg:space-x-10 lg:place-items-center">
                            <Image width="540" height="960" alt="ClearFly VA 737-800 Hectagons livery" className={showcaseImageGridClass} src="/projects/clearfly/cfva_1.png"></Image>
                            <Image width="540" height="960" alt="ClearFly VA C172 livery" className={showcaseImageGridClass} src="https://cdn.discordapp.com/attachments/965419865521393704/1076860382473375784/Cessna_172SP_-_2023-02-19_14.19.18.png"></Image>
                            <Image width="540" height="960" alt="ClearFly VA 737-800 Hectagons livery" className={showcaseImageGridClass} src="https://cdn.discordapp.com/attachments/965419865521393704/1059606587389513879/b738_4k_-_2023-01-02_23.55.40.png"></Image>
                        </div>
                        <div className="py-3 flex space-x-2">
                            <a href="https://github.com/ClearFly-Official" target="_blank">
                                <button className={linkButtonClass} title="GitHub organization" type="button">
                                    <Image src="/icons/github-mark-white.png" width="64" height="64" alt="github" className="h-8 w-8"/>
                                </button>
                            </a>
                            <a href="https://discord.gg/jjpwtusf6n" target="_blank">
                                <button className={linkButtonClass} title="Discord server" type="button">
                                    <div className="h-8 w-8">
                                        <Image src="/icons/discord-mark-white.png" width="64" height="64" alt="discord" className="h-6 w-8 relative top-1"/>
                                    </div>
                                </button>
                            </a>
                            <a href="https://forums.x-plane.org/index.php?/forums/topic/265735-clearfly-boeing-737-100/&" target="_blank">
                                <button className={linkButtonClass + " py-3 flex"} title="ClearFly on the X-Plane.org forums" type="button">
                                    <Image src="/icons/arrow_outward_w.svg" width="64" height="64" alt="Arrow pointing right-top" className="h-6 w-6 relative top-0.5"/>x-plane.org
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="xpdrefjson" className="grid place-items-center">
                    <h2 className="p-3 text-4xl text-black dark:text-white">X-Plane-DatarefJSON</h2>
                    <div className="flex flex-col place-items-center">
                        <p className="max-w-2xl">
                            X-Plane-DatarefJSON is a simple project that gives you X-Plane datarefs and commands in JSON format,
                            for easy access in all kinds of applications, programming languages, etc.
                        </p>
                        <div className="flex flex-col place-items-center">
                            <Image src="/projects/xpdrefjson/code_sample.png" alt="Code sample" width="1080" height="1902" className={showcaseImageCodeClass}/>
                        </div>
                        <div className="py-3 flex space-x-2">
                            <a href="https://github.com/duvbolone/X-Plane-DatarefJSON" target="_blank">
                                <button className={linkButtonClass} title="GitHub repository" type="button">
                                    <Image src="/icons/github-mark-white.png" width="64" height="64" alt="github" className="h-8 w-8"/>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="my-website" className="grid place-items-center">
                    <h2 className="p-3 text-4xl text-black dark:text-white">My Website</h2>
                    <div className="flex flex-col place-items-center">
                        <p className="py-4 max-w-2xl">
                            My website is well, a website, that's supposed to tell a little bit more about me and you're browsing it right now. I hope you like it!
                        </p>
                        <p className="py-4 max-w-2xl">
                            PS: You can find more information about it <Link href="/about#website"><strong>here</strong></Link>
                        </p>
                        <div className="flex flex-col place-items-center">
                            <Image src="/projects/website/home.png"  width="1920" height="1080" alt="Home Image" className={showcaseImageClass}/>
                        </div>
                        <div className="py-5 flex space-x-2">
                            <a href="https://github.com/duvbolone/X-Plane-DatarefJSON" target="_blank">
                                <button className={linkButtonClass} title="GitHub repository" type="button">
                                    <Image src="/icons/github-mark-white.png" width="64" height="64" alt="github" className="h-8 w-8"/>
                                </button>
                            </a>
                            <a href="https://matt3o0.is-a.dev/" target="_blank">
                                <button className={linkButtonClass + " py-3 flex"} title="Website link" type="button">
                                    <Image src="/icons/arrow_outward_w.svg" alt="GitHub" width="64" height="64" className="h-6 w-6 relative top-0.5"/>Website
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Link href="/projects#top"><button title="back-to-top" role="button" className="fixed text-2xl right-10 bottom-20 px-2 py-1 rounded-full text-white bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-600">↑</button></Link>
        </main>
    )
}