import styles from './LegalInfo.module.css'

const LegalInfo = (props) => {
    return (
        <div className={styles.wrapper}>
            <h1>Юридическая информация</h1>
            {props.legal_info.map(item => {
                return (
                    <div className={styles.paragraph}>
                        <h2>{item.title}</h2>
                        <div className={styles.text}>{item.text}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default LegalInfo