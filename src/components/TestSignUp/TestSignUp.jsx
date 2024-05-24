import {useState} from "react";
import styles from './TestSignUp.module.css'
import image from '../../images/TestSignUp/Forms.jpg'

const TestSignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [model, setModel] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form className={styles.flex_container} onSubmit={handleSubmit}>
                    <label className={styles.item} htmlFor="name">
                        <div className={styles.text}>Имя и Фамилия *</div>
                        <input
                            placeholder={'введите ваши имя и фамилию'}
                            className={styles.input}
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    <label className={styles.item} htmlFor="model">
                        <div className={styles.text}>Интересующая вас модель *</div>
                        <input
                            placeholder={'Введите модель'}
                            className={styles.input}
                            type="text"
                            id="model"
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                            required
                        />
                    </label>
                    <label className={styles.item} htmlFor="email">
                        <div className={styles.text}>Email адрес *</div>
                        <input
                            placeholder={'введите адрес электронной почты'}
                            className={styles.input}
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label className={styles.item} htmlFor="number">
                        <div className={styles.text}>Номер телефона *</div>
                        <input
                            placeholder={'введите номер телефона'}
                            className={styles.input}
                            type="phone"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </label>
                    <div className={styles.item}>
                        <div className={styles.text}>Диллер</div>
                        <div className={styles.border}>Saab Semey</div>
                    </div>
                    <input className={styles.button} type="reset" value={'Reset'}/>
                    <button className={styles.button} type="submit">Submit</button>
                </form>
                <img className={styles.image} src={image} alt="image"/>
            </div>
        </div>
    )
}

export default TestSignUp