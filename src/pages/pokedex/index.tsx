import React from 'react'
import Navbar from '../../components/Navbar'
import Link from 'next/link'
import Data from '../../assets/data/Pokemons'
import styles from './index.module.css'

const Pokedex = () => {
    const pokemons = Data.map((pokemon, i) => {
        let linkText = pokemon.replace(/\s+/g, '-').replace(/’|\./, '')
        if (pokemon === 'Nidoran♀') {
            linkText = 'Nidoran-f'
        } else if (pokemon === 'Nidoran♀') {
            linkText = 'Nidoran-m'
        }

        return (
            <div className={styles.cell} key={`${pokemon}_${i + 1}`}>
                <div className={styles.number}>{i + 1}</div>
                <div>
                    <Link href={`/pokedex/${linkText}`}>{pokemon}</Link>
                </div>
            </div>
        )
    })

    return (
        <div className="background">
            <Navbar />
            <div className={`${styles.container} container`}>
                <h2>Pokemons</h2>
                <div className={styles.table}>{pokemons}</div>
            </div>
        </div>
    )
}

export default Pokedex
