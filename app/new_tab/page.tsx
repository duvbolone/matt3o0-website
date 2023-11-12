import Clock from '@/components/clock';
import styles from './new_tab.module.css';

export const metadata = {
    title: 'New Tab - Matt3o0‘s website',
    description: 'This website tells you a bit more about Matt3o0.',
}

export default function NewTab() {
    return (
        <main className={styles.main}><Clock></Clock></main>
    )
}