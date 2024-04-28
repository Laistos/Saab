import styles from './ContentMenu.module.css'
import logo from '../../../images/logo.jpg'

const ContentMenu = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.line}></div>
            <div className={styles.logo_container}>
                <img src={logo} className={styles.logo} alt="logo"/>
            </div>
            <div className={styles.menu_wrapper}>
                <div className={styles.models}>
                    <h1 className={styles.title}>Модели</h1>
                    <div className={styles.list}>
                        <a href="#" className={styles.model}>Saab 9-5</a>
                        <a href="#" className={styles.model}>Saab 9-3</a>
                        <a href="#" className={styles.model}>Saab 9-2x</a>
                        <a href="#" className={styles.model}>Saab 9-7x</a>
                        <a href="#" className={styles.model}>Saab 9-4x</a>
                    </div>
                </div>
                <div className={styles.item_container}>
                    <h2 className={styles.title}>Поддержка</h2>
                    <div className={styles.item}>
                        <a href="#" className={styles.link}>Автомобили с пробегом</a>
                        <a href="#" className={styles.link}>Страхование</a>
                        <a href="#" className={styles.link}>Контакты</a>
                    </div>
                </div>
                <div className={styles.itemContainer}>
                    <h2 className={styles.title}>Мир Saab</h2>
                    <div className={styles.item}>
                        <a href="#" className={styles.link}>О нас</a>
                        <a href="#" className={styles.link}>Экологическая политика</a>
                        <a href="#" className={styles.link}>Вакансии</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentMenu