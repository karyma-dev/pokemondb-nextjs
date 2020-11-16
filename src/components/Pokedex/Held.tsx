import React, { ReactElement } from 'react'

interface Props {
    held: [
        {
            item: {
                name: string
                url: string
            }
            version_details: [
                {
                    rarity: number
                    version: {
                        name: string
                        url: string
                    }
                }
            ]
        }
    ]
}

const Held = (props: Props): ReactElement => {
    const held =
        props.held.length > 0
            ? props.held.map(({ item }, i) => <span key={i}>{item.name}</span>)
            : 'N/A'

    return (
        <div>
            <strong>Held Items: </strong>
            {held}
        </div>
    )
}

export default Held
