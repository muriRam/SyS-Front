import styles from "./TemplateSection.module.css"
import TemplateCard from "../TemplateCard/TemplateCard.component";
const TemplateSection = () => {
    return(
        <section className={styles.templatesSection}>
            <h2 className={styles.title}>
                Templates Disponibles
            </h2>

            <div className={styles.cardsContainer}>
                <TemplateCard
                    name="DOC1"
                    route=""
                />

                <TemplateCard
                    name="DOC2"
                    route=""
                />
            </div>
        </section>
    )
}

export default TemplateSection;