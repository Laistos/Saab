import styles from './BodyRepair.module.css'
import React, {useState} from "react";

const BodyRepair = (props) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? props.body_repair.slides.length - 1 : currentSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === props.body_repair.slides.length - 1 ? 0 : currentSlide + 1);
    };
    return (
        <div className={styles.slider}>
            <div className={styles.slider_container}>
                <h2>{props.body_repair.slides[currentSlide].brand}</h2>
                <div className={styles.parts}>
                    {props.body_repair.slides[currentSlide].parts.map((part, index) => (
                        <div className={styles.flex_container} key={index}>
                            <div className={styles.item}>
                                <img className={styles.image} src={part.bumper_image} alt={part.name}/>
                                <p>Замена бампера: {part.bumper_price} KZT</p>
                            </div>
                            <div className={styles.item}>
                                <img className={styles.image} src={part.headlights_image} alt={part.name}/>
                                <p>Замена фар: {part.headlights_price} KZT</p>
                            </div>
                            <div className={styles.item}>
                                <img className={styles.image} src={part.windshield_image} alt={part.name}/>
                                <p>Замена лобового стекла: {part.windshield_price} KZT</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.button_container}>
                <button className={styles.button} onClick={prevSlide}>Previous</button>
                <button className={styles.button} onClick={nextSlide}>Next</button>
            </div>

        </div>
    );
}

export default BodyRepair