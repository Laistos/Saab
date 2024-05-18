import {useState} from "react";
import styles from './ServiceSignUp.module.css'
import image from '../../images/serviceSignUp/Forms.jpg'

const ServiceSignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [carModel, setCarModel] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
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
                    <label className={styles.item} htmlFor="carModel">
                        <div className={styles.text}>Модель вашего автомобиля *</div>
                        <select
                            className={styles.input}
                            id="carModel"
                            value={carModel}
                            onChange={(e) => setCarModel(e.target.value)}
                            required
                        >
                            <option value="">Выбрать модель</option>
                            <option value="Saab 9-2x">Saab 9-2x</option>
                            <option value="Saab 9-3">Saab 9-3</option>
                            <option value="Saab 9-4x">Saab 9-4x</option>
                            <option value="Saab 9-5">Saab 9-5</option>
                            <option value="Saab 9-7x">Saab 9-7x</option>
                        </select>
                    </label>
                    <label className={styles.item} htmlFor="email">
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
                    <input className={styles.button} type="reset" value={'Reset'}/>
                    <button className={styles.button} type="submit">Submit</button>
                </form>
                <img className={styles.image} src={image} alt="image"/>
            </div>
        </div>
    )
}

export default ServiceSignUp