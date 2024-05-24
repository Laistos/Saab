import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.line}></div>
            <nav className={styles.navbar}>
                <div className={styles.link_container}>
                    <NavLink target={"_blank"} className={styles.link} to={'/models'}>Узнать о 9-5 Sedan</NavLink>
                </div>
                <div className={styles.link_container}>
                    <NavLink target={"_blank"} className={styles.link} to={'/models'}>Модельный ряд</NavLink>
                </div>
                <div className={styles.link_container}>
                    <NavLink target={"_blank"} className={styles.link} to={'/offers'}>Специальные предложения</NavLink>
                </div>
                <div className={styles.link_container}>
                    <NavLink target={"_blank"} className={styles.link} to={'/subscribe'}>Записаться на сервис</NavLink>
                </div>
                <div className={styles.link_container}>
                    <NavLink target={"_blank"} className={styles.link} to={'/test'}>Записаться на тест-драйв</NavLink>
                </div>
            </nav>
        </div>

    )
}

export default Navbar