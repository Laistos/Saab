import styles from './BodyRepair.module.css'
import bumper_2 from '../../images/body_repair/Saab_9_2x/bumper.jpg'
import headlights_2 from '../../images/body_repair/Saab_9_2x/headlights.jpg'
import windshield_2 from '../../images/body_repair/Saab_9_2x/windshield.jpg'
import bumper_3 from '../../images/body_repair/Saab_9_3/bumper.jpg'
import headlights_3 from '../../images/body_repair/Saab_9_3/headlights.jpg'
import windshield_3 from '../../images/body_repair/Saab_9_3/windshield.jpg'
import bumper_4 from '../../images/body_repair/Saab_9_4x/bumper.jpg'
import headlights_4 from '../../images/body_repair/Saab_9_4x/headlights.jpg'
import windshield_4 from '../../images/body_repair/Saab_9_4x/windshield.png'
import bumper_5 from '../../images/body_repair/Saab_9_5/bumper.jpg'
import headlights_5 from '../../images/body_repair/Saab_9_5/headlights.jpg'
import windshield_5 from '../../images/body_repair/Saab_9_5/windshield.jpg'
import bumper_7 from '../../images/body_repair/Saab_9_7/bumper.jpg'
import headlights_7 from '../../images/body_repair/Saab_9_7/headlights_7.jpg'
import windshield_7 from '../../images/body_repair/Saab_9_7/windshield.png'
import {useState} from "react";
import React from "react";

const BodyRepair = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            brand: 'Saab 9-2x',
            parts: [
                {
                    bumper_price: 50000,
                    bumper_image: bumper_2,
                    headlights_price: 10000,
                    headlights_image: headlights_2,
                    windshield_price: 17000,
                    windshield_image: windshield_2
                },
            ],
        },
        {
            brand: 'Saab 9-3',
            parts: [
                {
                    bumper_price: 60000,
                    bumper_image: bumper_3,
                    headlights_price: 15000,
                    headlights_image: headlights_3,
                    windshield_price: 25000,
                    windshield_image: windshield_3
                },
            ],
        },
        {
            brand: 'Saab 9-4x',
            parts: [
                {
                    bumper_price: 80000,
                    bumper_image: bumper_4,
                    headlights_price: 27000,
                    headlights_image: headlights_4,
                    windshield_price: 85000,
                    windshield_image: windshield_4
                },
            ],
        },
        {
            brand: 'Saab 9-5',
            parts: [
                {
                    bumper_price: 72500,
                    bumper_image: bumper_5,
                    headlights_price: 25000,
                    headlights_image: headlights_5,
                    windshield_price: 35000,
                    windshield_image: windshield_5
                },
            ],
        },
        {
            brand: 'Saab 9-7',
            parts: [
                {
                    bumper_price: 100000,
                    bumper_image: bumper_7,
                    headlights_price: 30000,
                    headlights_image: headlights_7,
                    windshield_price: 90000,
                    windshield_image: windshield_7
                },
            ],
        },
    ]

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <div className="slider">
            <div className="slider-content">
                <h2>{slides[currentSlide].brand}</h2>
                <div className="parts">
                    {slides[currentSlide].parts.map((part, index) => (
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