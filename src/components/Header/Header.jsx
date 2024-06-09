import styles from './Header.module.css';
import Menu from "./Menu/Menu";
import logo from '../../images/logo.jpg'
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import {useEffect, useState} from "react";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [scrollingUp, setScrollingUp] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }

        if (window.scrollY < document.body.scrollTop) {
            setScrollingUp(true);
        } else {
            setScrollingUp(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.logo_container}>
                <img className={styles.logo} src={logo} alt="logo"/>
            </div>
            {scrollingUp}
            <Menu />
            <HeaderInfo />
        </header>
    )
}

export default Header;