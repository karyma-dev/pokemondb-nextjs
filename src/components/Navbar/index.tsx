import React from 'react'
import styles from './index.module.css'

const Navbar = () => {
    return (
        <ul className={styles.ul}>
            <div className={`container ${styles.container}`}>
                <li className={styles.li}>Pokedex</li>
                <li className={styles.li}>Berries</li>
            </div>
        </ul>
    )
}

export default Navbar
