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
            ? props.held.map(({ item }, i) => <li key={i}>{item.name}</li>)
            : 'none'

    return (
        <div>
            Held Items
            {held}
        </div>
    )
}

export default Held
