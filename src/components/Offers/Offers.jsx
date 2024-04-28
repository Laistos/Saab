import styles from './Offers.module.css'
import Saab_9_2x from '../../images/offers/Saab_9_2x.jpg'
import Saab_9_4x from '../../images/offers/Saab_9_4x.jpg'
import Saab_9_5 from '../../images/offers/Saab_9_5.jpg'
import discount1 from '../../images/offers/Discount_pana.svg'
import discount2 from '../../images/offers/Discount_cuate.svg'
import discount3 from '../../images/offers/Discount-amico.svg'

const Offers = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <img className={styles.model} src={Saab_9_2x} alt="Saab_9_2x"/>
                <div className={styles.container}>
                    <div className={styles.text}>Преобредите этот прекрасный и комфортный автомобиль Saab 9-2x за
                        9500000 и
                        получите еще сверху
                        гарантию на 3 года
                    </div>
                    <img className={styles.image} src={discount1} alt=""/>
                </div>
            </div>
            <div className={styles.item}>
                <img className={styles.model} src={Saab_9_4x} alt="Saab_9_2x"/>
                <div className={styles.container}>
                    <div className={styles.text}>Преобретитет этот прекарсный кроссовер Saab 9-4x за 18000000 и получите в подарок бесплатный комплект зимних шин!
                    </div>
                    <img className={styles.image} src={discount2} alt=""/>
                </div>
            </div>
            <div className={styles.item}>
                <img className={styles.model} src={Saab_9_5} alt="Saab_9_2x"/>
                <div className={styles.container}>
                    <div className={styles.text}>Купите этот прекрасный Saab 9-5 за 1300000 KZT и в подарок вам датут 3
                        бесплатных ТО и антифриз
                        Felix Carbox 10 л
                    </div>
                    <img className={styles.image} src={discount3} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Offers