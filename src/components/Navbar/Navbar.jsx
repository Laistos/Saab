import styles from './Navbar.module.css'

const Navbar = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.line}></div>
            <nav className={styles.navbar}>
                <div className={styles.link_container}>
                    <a href="#" className={styles.link}>Узнать о 9-5 Sedan</a>
                </div>
                <div className={styles.link_container}>
                    <a href="#" className={styles.link}>Модельный ряд</a>
                </div>
                <div className={styles.link_container}>
                    <a href="#" className={styles.link}>Специальные предложения</a>
                </div>
                <div className={styles.link_container}>
                    <a href="#" className={styles.link}>Записаться на сервис</a>
                </div>
                <div className={styles.link_container}>
                    <a href="#" className={styles.link}>Записаться на тест-драйв</a>
                </div>
            </nav>
        </div>

    )
}

export default Navbar