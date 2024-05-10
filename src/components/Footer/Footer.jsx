import styles from './Footer.module.css'
import instagram from '../../images/icons/instagram.svg'
import facebook from '../../images/icons/facebook.svg'

const Footer = () => {
    return(
        <footer className={styles.flex_container}>
            <div>Copyright © Saab</div>
            <div className={styles.social_networks}>
                <a className={styles.social_link} target={"_blank"} href="https://www.instagram.com/sotsialov_alimzhan/" rel="noreferrer">
                    <img src={instagram} alt=""/>
                </a>
                <a target={"_blank"} href="https://www.facebook.com/?locale=ru_RU">
                    <img className={styles.social_link} src={facebook} alt=""/>
                </a>
            </div>
            <div className={styles.link_container}>
                <a className={styles.link} href="">Юридическая информация </a>
            </div>
        </footer>
    )
}

export default Footer