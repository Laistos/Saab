import styles from './Content.module.css'
import Navbar from "../Navbar/Navbar";
import ImageSet from "../ImageSet/ImageSet";

const Content = () => {
    return(
        <div className={styles.wrapper}>
            <Navbar />
            <ImageSet />
        </div>
    )
}

export default Content