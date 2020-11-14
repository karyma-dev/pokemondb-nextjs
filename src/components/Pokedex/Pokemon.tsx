import React, { ReactElement } from 'react'
import Abilities from './Abilities'
import Held from './Held'
import Moves from './Moves'
import Stats from './Stats'
import Sprite from './Sprite'
import Type from './Type'

import styles from './index.module.css'

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
            <Sprite sprites={sprites} name={name} />
            Name: {name}
            National No: {id}
            Base Exp: {base_experience}
            <Abilities abilities={abilities} />
            <Held held={held_items} />
            <Stats stats={stats} />
            <Type types={types} />
            <Moves moves={moves} />
        </div>
    )
}

export default Pokemon
