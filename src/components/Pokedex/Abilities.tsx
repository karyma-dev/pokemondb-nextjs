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
        <span className="capitalize" key={i}>
            {`${ability.name} `}
        </span>
    ))

    return (
        <div>
            <strong>Abilities: </strong>
            {abilities}
        </div>
    )
}

export default Abilities
