import styles from './Menu.module.css'
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <div className={styles.link_container}>
                <NavLink to={'/main'} className={styles.link}>Главная</NavLink>
            </div>
            <div className={styles.link_container}>
                <NavLink to={'/about'} className={styles.link}>Мир Saab</NavLink>
            </div>
            <div className={styles.link_container}>
                <NavLink to={'/models'} className={styles.link}>Модельный ряд</NavLink>
            </div>
            <div className={styles.link_container}>
                <NavLink to={'/repair'} className={styles.link}>Кузовный ремонт</NavLink>
            </div>
            <div className={styles.link_container}>
                <NavLink to={'/offers'} className={styles.link}>Спецаильные предложения</NavLink>
            </div>
            <div className={styles.link_container}>
                <NavLink to={'/service'} className={styles.link}>Сервис и аксессуары</NavLink>
            </div>
        </nav>
    )
}

export default Menu