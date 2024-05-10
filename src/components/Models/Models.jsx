import React from "react";
import styles from './Models.module.css'

const Models = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.model}>
                <h1 className={styles.text}>
                    {props.title}
                </h1>
                <div className={styles.machine_info_container}>
                    <div className={styles.machine_info}>
                        <div className={styles.title}> Общие данные:
                            <div className={styles.info}>Производитель: {props.manufacturer}</div>
                            <div className={styles.info}>Годы производства: {props.years}</div>
                            <div className={styles.info}>Сборка: {props.assembling}</div>
                            <div className={styles.info}>Класс: {props.class}</div>
                        </div>
                        <div className={styles.title}>
                            Дизайн и конструкция:
                            <div className={styles.info}>Тип кузова: {props.body}</div>
                            <div className={styles.info}>Компоновка: {props.layout}</div>
                            <div className={styles.info}>Двигатель: {props.engine}</div>
                        </div>
                        <div className={styles.title}>Массогабаритные характеристики:
                            <div className={styles.info}>Длина: {props.length} мм</div>
                            <div className={styles.info}>Ширина: {props.width} мм</div>
                            <div className={styles.info}>Высота: {props.height} мм</div>
                            <div className={styles.info}>Колёсная база: {props.wheelbase} мм</div>
                        </div>
                    </div>
                    <div className={styles.image_container}>
                        <img className={styles.image} src={props.image} alt="machine"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Models