import Image from "next/image";
import { getFavicon } from "@/app/layout";
import { faviconPreviews, linkClass } from "./classes";

function IconLink({ url, title, size }: { url: string; title?: string | null, size?: number }) {
    const link_title = title || new URL(url).hostname;

    const icon_size = size || 64;

    return (
        <a href={url} target="_blank" className={linkClass}>
            <Image src={getFavicon(url, icon_size)} width={icon_size} height={icon_size} alt={`${link_title} logo`} className={faviconPreviews} />
            <strong>{link_title}</strong>
        </a>
    );
}

export default IconLink;