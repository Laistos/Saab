import styles from './MenuLink.module.css'

const MenuLink = (props) => {
    return (
        <div className={styles.link_container}>
            <a href="#" className={styles.link}>{props.link}</a>
        </div>
    )
}

export default MenuLink