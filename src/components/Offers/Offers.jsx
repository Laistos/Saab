import styles from './Offers.module.css'

const Offers = (props) => {
    return (
        <div className={styles.wrapper}>
            {props.offers.map(item => {
                return (
                    <div className={styles.item}>
                        <img className={styles.model} src={item.image} alt="model"/>
                        <div className={styles.container}>
                            <div className={styles.text}>{item.text}</div>
                            <img className={styles.image} src={item.discount} alt=""/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Offers