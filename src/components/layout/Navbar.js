import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
//import logo from './img'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">

                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/equipas">Equipas</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/jogos">Jogos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/about_us">About_us</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar