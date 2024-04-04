import styles from './Header.module.css'
import Menu from "./Menu/Menu";
import logo from '../../images/logo.jpg'
import language_icon from '../../images/language.jpg'
import profile_icon from '../../images/profile.jpg'

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.logo_container}>
                <img className={styles.logo} src= {logo} alt="logo"/>
            </div>
            <Menu />
            <div className={styles.language}>
                <img className={styles.image} src={language_icon} alt="icon"/>
                <div>RU</div>
            </div>
            <div className={styles.info}>
                <div className={styles.text}> +7 (705) 282-07-85</div>
                <div className={styles.text}> Шакарима 38</div>
            </div>
            <div className={styles.profile}>
                <img src={profile_icon} alt="icon" className={styles.profile_icon}/>
                <a href="#" className={styles.profile_link}>Профиль</a>
            </div>
        </header>
    )
}

export default Header