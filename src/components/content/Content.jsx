import styles from './Content.module.css'

const Content = () => {
    return (
        <div className={styles.content}>
            <div className="image_set">
                <img src="#" alt="image" className="image"/>
                <img src="#" alt="image" className="image"/>
                <img src="#" alt="image" className="image"/>
            </div>
        </div>
    )
}

export default Content