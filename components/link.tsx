import Image from "next/image";
import { faviconPreviews, linkClass } from "./classes";

export function getFavicon(url: string, size: number) {
    return `https://www.google.com/s2/favicons?domain=${new URL(url).origin}&sz=${size}`
}

function IconLink({ url, title, size }: { url: string; title?: string | null, size?: number }) {
    const link_title = title || new URL(url).hostname;

    const icon_size = size || 64;

    return (
        <a href={url} target="_blank" style={{ border: "none" }} className={linkClass}>
            <Image src={getFavicon(url, icon_size)} width={icon_size} height={icon_size} alt={`${link_title} logo`} className={faviconPreviews} />
            <strong>{link_title}</strong>
        </a>
    );
}

export function MaskedLink({ url, title }: { url: string; title?: string | null }) {
    const link_title = title || new URL(url).hostname;
    return (<a href={url} target="_blank" className={linkClass}>
        <strong>{link_title}</strong>
    </a>)
}

export default IconLink;