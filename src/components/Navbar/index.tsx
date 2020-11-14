import React from 'react'
import Link from 'next/link'
import Autocomplete from '../Autocomplete'
import styles from './index.module.css'

const Navbar = () => {
    return (
        <ul className={styles.ul}>
            <div className={`${styles.container} container`}>
                <li className={styles.li}>
                    <Link href="/">Home</Link>
                </li>
                <li className={styles.li}>
                    <Link href="/pokedex">Pokedex</Link>
                </li>
                <li className={styles.li}>
                    <Link href="/berries">Berries</Link>
                </li>
                <li className={styles.li}>
                    <Autocomplete />
                </li>
            </div>
        </ul>
    )
}

export default Navbar
