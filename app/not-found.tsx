import { h1Class, h2Class, linkButtonClass } from "@/components/classes";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: '404 - Matt3o0‘s website',
    description: 'This website tells you a bit more about Matt3o0.',
}

export default function Custom404() {
    return (
        <main className="p-10 grid place-items-center">
            <div className="flex flex-col">
                <div className="flex space-x-3">
                    <h1 className={h1Class + "font-bold"}>404<p className="text-base font-normal text-slate-500">Page not found</p></h1>
                </div>
                <h2 className={h2Class}>Took a wrong turn?</h2>
            </div>
            <Link href="/">
                <button className={linkButtonClass + "mt-[25rem] mb-[10rem]"} title="Back to home">
                    <Image src="/icons/arrow_outward_w.svg" width="64" height="64" alt="Arrow pointing right-top" className="h-6 w-6 relative top-0.5 mirror-x" />Back to Home
                </button>
            </Link>
        </main>
    )
}