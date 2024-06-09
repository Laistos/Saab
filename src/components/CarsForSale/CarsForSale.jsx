import styles from './CarsForSale.module.css';
import React, {useState} from "react";

const CarsForSale = (props) => {

    console.log(props.cars_for_sale.slides.parts.length)

    const [currentImage, setCurrentImage] = useState(0);

    const prevSlide = () => {
        setCurrentImage(currentImage === 0 ? props.cars_for_sale.slides.parts.length - 1 : currentImage - 1);
    };

    const nextSlide = () => {
        setCurrentImage(currentImage === props.cars_for_sale.slides.parts.length - 1 ? 0 : currentImage + 1);
    };

    return (
        <div className={styles.wrappper}>
            {props.cars_for_sale.slides.map(item => {
                return (
                    <div className={styles.flex_container}>
                        <div className={styles.text_container}>
                            <h1 className={styles.title}>{item.brand}</h1>
                            <h2 className={styles.text}>{item.price} ₸</h2>
                            <ul className={styles.list}>
                                <li className={styles.item}>Год выпуска : {item.year}</li>
                                <li className={styles.item}>Статус: {item.status}</li>
                                <li className={styles.item}>Пробег: {item.mileage} km</li>
                                <li className={styles.item}>Кузов: {item.body}</li>
                                <li className={styles.item}>Цвет: {item.color}</li>
                                <li className={styles.item}>Двигатель: {item.engine}</li>
                                <li className={styles.item}>Коробка: {item.transmission}</li>
                                <li className={styles.item}>Привод: {item.privod}</li>
                                <li className={styles.item}>Руль: {item.drive}</li>
                                <li className={styles.item}>Состояние: {item.condition}</li>
                                <li className={styles.item}>Владельцы: {item.owners}</li>
                                <li className={styles.item}>ПТС: {item.pts}</li>
                                <li className={styles.item}>Владение: {item.ownership}</li>
                                <li className={styles.item}>Таможня: {item.customs}</li>
                                <li className={styles.item}>Код: {item.code}</li>
                            </ul>
                        </div>
                        <div className={styles.image_container}>
                            <img src={item.parts[currentImage]} alt="#"/>
                            <div className={styles.button_container}>
                                <button className={styles.button} onClick={prevSlide}>Previous</button>
                                <button className={styles.button} onClick={nextSlide}>Next</button>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}
export default CarsForSale;