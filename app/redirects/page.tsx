import RedirectList from "@/components/redirects/redirect_list";
import styles from "./page.module.css";

export default function Page() {
    return (<main className={styles.main}>
        <h1 className="p-3 text-6xl text-black dark:text-m27v1">Active Redirects</h1>
        <RedirectList></RedirectList>
        <div className="text-m27v3 dark:text-m27v4">
            <h1>Tips:</h1>
            <li>click on any 'Redirect ID' to copy it.</li>
            <li>click on any 'Stops On' to change viewing mode.</li>
        </div>
    </main>)
}