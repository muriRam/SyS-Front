import styles from "./SearchSection.module.css"

export const SearchSection = () => {
    return(
            <section className={styles.searchSection}>
                 <div className={styles.searchContainer}>

                    <h2 className={styles.title}>
                    Aca va la barra de navecacion
                    </h2>

                    <input
                    type="text"
                    placeholder="Buscar soldador por nombre, DNI, ID..."
                    className={styles.searchInput}
                    />

                </div>
            </section>
    )
}

export default SearchSection;