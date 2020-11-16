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
    const types = props.types.map(({ type }, i) => (
        <span className="capitalize" key={i}>
            {`${type.name} `}
        </span>
    ))

    return (
        <div>
            <strong>Types: </strong>
            {types}
        </div>
    )
}

export default Type
