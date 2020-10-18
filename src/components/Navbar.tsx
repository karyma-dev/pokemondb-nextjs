import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <ul className={styles.navbar}>
            <li className={styles.link}>Pokemon</li>
            <li className={styles.link}>Berries</li>
        </ul>
    )
}

export default Navbar
