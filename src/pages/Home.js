import styles from './Home.module.css'
import clubesv from '../img/clubesv.webp'
import LinkButton from '../components/layout/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>
                Bem-vindo ao <span>Info Sport!</span>
            </h1>
            <p></p>
            <LinkButton to="/Clubs" text="Criar Equipa" />
            <img src={clubesv} alt="Info Sport" />
        </section>
    )
}

export default Home