import styles from './Navbar.module.css'

const Navbar = (props) => {
    return (
        <nav className={styles.navbar}>
            <div className="link_container">
                <a href="#" className="link">Узнать о 9-5 Sedan</a>
            </div>
            <div className="link_container">
                <a href="#" className="link">Модельный ряд</a>
            </div>
            <div className="link_container">
                <a href="#" className="link">Специальные предложения</a>
            </div>
            <div className="link_container">
                <a href="#" className="link">Записаться на сервис</a>
            </div>
        </nav>
    )
}

export default Navbar