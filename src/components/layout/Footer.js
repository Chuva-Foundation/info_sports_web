 import {FaFacebook, FaInstagram, FaTwiter} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    FaFacebook
                </li>
                <li>
                    FaInstagram
                </li>
                <li>
                    FaTwiter
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Info Sports Web</span> &copy; 2022
            </p>
        </div>
    )
}

//export default Footer