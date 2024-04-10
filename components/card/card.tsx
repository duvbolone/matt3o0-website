import { jetbrains } from "../fonts";
import styles from "./card.module.css";

interface InfoCardProps {
    title: string,
    emoji: string,
    children: React.ReactNode
}

const InfoCard: React.FC<InfoCardProps> = ({ title, emoji, children }) => {
    return (<div className={styles.card}>
        <div className={styles.text}>
            <h2 className={`${jetbrains} ${styles.header}`}>{title}</h2>
            <div className={styles.content}>{children}</div>
        </div>
        <p className={styles.emoji}>{emoji}</p>
    </div>)
}

export default InfoCard;