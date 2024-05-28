import styles from './Accessories.module.css'
import React from "react";

const Accessories = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.flex_container}>
                {props.accessories.map(item => {
                    return (
                        <div className={styles.item}>
                            <img className={styles.image} src={item.image} alt="backpack"/>
                            <div className={styles.text}>{item.name}</div>
                            <div className={styles.text}>{item.price}₸</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Accessories