import styles from "./TemplateCard.module.css"
import Link from "next/link"
import { FileText } from "lucide-react"

type Props = {
    name: string;
    route: string;
}

const TemplateCard = ({
    name,
    route,
}: Props) => {
    return(
        <Link href={route} className={styles.card}>
            <div className={styles.cardContainer}>
                <FileText size={36} />
            </div>

            <div className={styles.content}>
                <h3 className={styles.name}>
                {name}
                </h3>
            </div>
        </Link>
    )
}

export default TemplateCard;