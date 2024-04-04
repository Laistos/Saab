import styles from './Header.module.css'
import Menu from "./Menu/Menu";
import logo from '../../images/logo.jpg'
import HeaderInfo from "./HeaderInfo/HeaderInfo";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.logo_container}>
                <img className={styles.logo} src= {logo} alt="logo"/>
            </div>
            <Menu />
            <HeaderInfo />
        </header>
    )
}

export default Header