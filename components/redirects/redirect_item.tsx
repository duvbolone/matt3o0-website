import Link from "next/link";
import Image from "next/image";
import { faviconPreviews, linkClass } from "../classes";
import { getFavicon } from "@/app/layout";

interface RedirectItem {
    redirect_id: string;
    url: string;
    stops_on: number;
  }

const RedirectItem = ({ item }: { item: RedirectItem }) => {
    return (
      <div style={{"display": "flex"}}>
        <h2>Redirect ID: {item.redirect_id}, </h2>
        <p>Redirects To: <a href={item.url} target="_blank" className={linkClass}>
                        <Image src={getFavicon(item.url, 32)} width="32" height="32" alt="Next.js logo" className={faviconPreviews} />
                        <strong>{new URL(item.url).hostname}</strong>
                    </a></p>
      </div>
    );
  };
  
export default RedirectItem;