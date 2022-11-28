import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

function LinkButton({ to, next }) {
    return (
        <Link className={styles.LinkButton} to={to}>
            <text />
        </Link>
    )
}

export default LinkButton