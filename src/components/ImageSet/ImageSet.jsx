import styles from './ImageSet.module.css'
import car_1 from '../../images/cars/car_1.jpg'
import car_2 from '../../images/cars/car_2.jpg'
import car_3 from '../../images/cars/car_3.jpg'

const ImageSet = () => {
    return (
        <div className={styles.content}>
            <div className={styles.image_set}>
                <img src={car_1} alt="image" className={styles.image1}/>
                <img src={car_2} alt="image" className={styles.image2}/>
                <img src={car_3} alt="image" className={styles.image3}/>
            </div>
        </div>
    )
}

export default ImageSet