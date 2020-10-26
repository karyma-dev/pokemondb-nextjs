import React, { ReactElement } from 'react'

interface Props {
    types: [
        {
            slot: number
            type: {
                name: string
                url: string
            }
        }
    ]
}

const Type = (props: Props): ReactElement => {
    console.log(props)
    const types = props.types.map(({ type }, i) => <li key={i}>{type.name}</li>)

    return (
        <div>
            Types:
            {types}
        </div>
    )
}

export default Type
