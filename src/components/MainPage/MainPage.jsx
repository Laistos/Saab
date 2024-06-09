import ContentMenu from "./ContentMenu/ContentMenu";
import Content from "./Content/Content";
import styles from './MainPage.module.css'

const MainPage = () => {
    return (
        <div className={styles.wrapper}>
            <Content/>
            <ContentMenu/>
        </div>
    )
}

export default MainPage