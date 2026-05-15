import styles from "./HomePage.module.css";
import SearchSection from "@/components/Search/SearchSection.component";
import TemplateSection from "@/components/Templates/TemplateSection/TemplateSection.component";

export const HomePage = () => (
    <div className={styles.container}>
        <div className={styles.contentWrapper}>
            <SearchSection />
            <TemplateSection />
        </div>

    </div>
)

export default HomePage;