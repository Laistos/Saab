import styles from './Menu.module.css'
import MenuLink from "./MenuLink/MenuLink";

const Menu = () => {

    let menu = [
        {link: "Модельный ряд "},
        {link: "Мир Saab"},
        {link: "Кузовный ремонт"},
        {link: "Спецаильные предложения"},
        {link: "Сервис и аксессуары"},
        {link: "Ещё"},
    ]

    let menuElement = menu.map((menu) => {return <MenuLink link={menu.link} />})

    return (
        <nav className={styles.menu}>
            {menuElement}
        </nav>
    )
}

export default Menu