import React, { ReactElement } from 'react'
import Abilities from './Abilities'
import Held from './Held'
import Moves from './Moves'
import Stats from './Stats'
import Sprite from './Sprite'
import Type from './Type'

import styles from './Pokemon.module.css'

interface Props {
    pokemon: {
        [key: string]: any
    } | null
}

const Pokemon = ({ pokemon }: Props): ReactElement => {
    const {
        abilities,
        base_experience,
        held_items,
        id,
        moves,
        name,
        sprites,
        stats,
        types
    } = pokemon

    return (
        <div className={`${styles.container} container`}>
            <div className={styles.name}>
                <Sprite sprites={sprites} name={name} />
                <h2 className="capitalize">{name}</h2>
            </div>
            <div className={styles.info}>
                <div className={styles.data}>
                    <h3>Data</h3>
                    <div className={styles.field}>
                        <strong>National No:</strong> {id}
                    </div>
                    <div className={styles.field}>
                        <strong>Base Exp:</strong> {base_experience}
                    </div>
                    <Type types={types} />
                    <Abilities abilities={abilities} />
                    <Held held={held_items} />

                    <br />

                    <Stats stats={stats} />
                </div>
                <div>
                    <Moves moves={moves} />
                </div>
            </div>
        </div>
    )
}

export default Pokemon
