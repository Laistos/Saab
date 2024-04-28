import styles from './MainPage.module.css'
import ContentMenu from "./ContentMenu/ContentMenu";
import Content from "./Content/Content";

const MainPage = () => {
    return (
        <div>
            <Content/>
            <ContentMenu/>
        </div>
    )
}

export default MainPage