import styles from './Accessories.module.css'
import React from "react";
import cup from '../../images/Accessories/cup.jpg'
import cap from '../../images/Accessories/cap.jpg'
import toy from '../../images/Accessories/toy.jpg'
import backpack from '../../images/Accessories/backpack.jpg'
import anti_slip from '../../images/Accessories/anti_slip.jpg'

const Accessories = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.flex_container}>
                <div className={styles.item}>
                    <img className={styles.image} src={backpack} alt="backpack"/>
                    <div className={styles.text}>Рюкзак Saab</div>
                    <div className={styles.text}>20 000 ₸</div>
                </div>
                <div className={styles.item}>
                    <img className={styles.image} src={cup} alt="cup"/>
                    <div className={styles.text}>Кружка Saab</div>
                    <div className={styles.text}>10 000 ₸</div>
                </div>
                <div className={styles.item}>
                    <img className={styles.image} src={cap} alt="cap"/>
                    <div className={styles.text}>Кепка Saab</div>
                    <div className={styles.text}>10 000 ₸</div>
                </div>
                <div className={styles.item}>
                    <img className={styles.image} src={toy} alt="toy"/>
                    <div className={styles.text}>Снежный шар Saab</div>
                    <div className={styles.text}>3500 ₸</div>
                </div>
                <div className={styles.item}>
                    <img className={styles.image} src={anti_slip} alt="anti-slip"/>
                    <div className={styles.text}>Антискользящая шумка для авто Saab</div>
                    <div className={styles.text}>9500 ₸</div>
                </div>
            </div>
        </div>
    )
}

export default Accessories