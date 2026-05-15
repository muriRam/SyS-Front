import styles from "./HomePage.module.css";

export const HomePage = () => (
    <div className={styles.container}>
        <section className={styles.searchSection}>
            <h1> Aca va la search var</h1>
        </section>
        <section className={styles.templatesSection}>
            <h2> aca deberian estar peque;as vistas que funcionen como accesos directos a los templates</h2>
        </section>
    </div>
)

export default HomePage;