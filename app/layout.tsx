//@ts-nocheck
import './globals.css'
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Popup from '@/components/privacy_popup';
import { Analytics } from '@vercel/analytics/react';
import { inter } from '@/components/fonts';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    if (children.props.childProp.segment === 'new_tab') {
        return (
            <html lang="en" className="bg-white dark:bg-black scroll-smooth">
                <head>
                    <meta charSet='utf-8'></meta>
                    <meta property="og:image" content="/M27.png"></meta>
                    <meta name="theme-color" content="#FFFFFF dark:#050505"></meta>
                </head>
                <body className={inter.className}>
                    {children}
                    <Popup />
                </body>
            </html>
        )
    } else {

        return (
            <html lang="en" className="bg-white dark:bg-black scroll-smooth">
                <head>
                    <meta charSet='utf-8'></meta>
                    <meta property="og:image" content="/M27.png"></meta>
                    <meta name="theme-color" content="#FFFFFF dark:#050505"></meta>
                </head>
                <body className={inter.className + " bg-gradient-to-t from-m27v3 to-white dark:bg-gradient-to-t dark:from-m27v2-600 dark:to-black text-m27v2 dark:text-slate-400 h-100%"}>
                    <NavBar />
                    {children}
                    <Footer />
                    <Popup />
                    <Analytics />
                </body>
            </html>
        )
    }
}
