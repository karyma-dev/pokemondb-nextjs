import React, { ReactElement } from 'react'

interface Props {
    abilities: [
        {
            ability: {
                name: string
                url: string
            }
            is_hidden: boolean
            slot: number
        }
    ]
}

const Abilities = (props: Props): ReactElement => {
    const abilities = props.abilities.map(({ ability }, i) => (
        <li className="capitalize" key={i}>
            {ability.name}
        </li>
    ))

    return (
        <div>
            Abilities
            {abilities}
        </div>
    )
}

export default Abilities
