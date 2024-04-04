import styles from './HeaderInfo.module.css'
import language_icon from "../../../images/language.jpg";
import profile_icon from "../../../images/profile.jpg";

const HeaderInfo = () => {
    return (
        <div className={styles.container}>
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
                <div className={styles.link_container}>
                    <a href="#" className={styles.profile_link}>Профиль</a>
                </div>
            </div>
        </div>
    )
}
export default HeaderInfo