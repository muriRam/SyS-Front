import styles from "./HomePage.module.css";

export const HomePage = () => (
    <div className={`flex-1 ${styles.main}`}>
        <section className={styles.section}>
            <h1> Aca va la search var</h1>
        </section>
        <section className={styles.section}>
            <h2> aca deberian estar peque;as vistas que funcionen como accesos directos a los templates</h2>
        </section>
    </div>
)

export default HomePage;