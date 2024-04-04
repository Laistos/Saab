import styles from './Menu.module.css'

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <div className={styles.link_container}>
                <a href="#" className={styles.link}>Модельный ряд</a>
            </div>
            <div className={styles.link_container}>
                <a href="#" className={styles.link}>Мир Saab</a>
            </div>
            <div className={styles.link_container}>
                <a href="#" className={styles.link}>Кузовный ремонт</a>
            </div>
            <div className={styles.link_container}>
                <a href="#" className={styles.link}>Спецаильные предложения</a>
            </div>
            <div className={styles.link_container}>
                <a href="#" className={styles.link}>Сервис и аксессуары</a>
            </div>
            <div className={styles.link_container}>
                <a href="#" className={styles.link}>Ещё</a>
            </div>
        </nav>
    )
}

export default Menu