import './globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'
import NavBar from '../components/navbar';
import Footer from '../components/footer';

export const inter = Inter({ subsets: ['latin'] })
export const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['100', '300', '400']})


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="bg-white dark:bg-black">
            <head>
                <meta charSet='utf-8'></meta>
                <meta property="og:image" content="/M27.png"></meta>
                <meta name="theme-color" content="#FFFFFF dark:#050505"></meta>
            </head>
            <body className={inter.className + " bg-gradient-to-t from-m27v3 to-white dark:bg-gradient-to-t dark:from-m27v2 dark:to-black text-m27v2 dark:text-slate-400 h-100%"}>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
