import React from 'react'

const Held = ({held_items}) => {
    const HeldItems = held_items.map(({item}, i) => {
        return (
            <div key={i}>
                {item.name}
            </div>
        )
    })

    return (
        <div>
            Holds:
            {HeldItems}
        </div>
    )

}

export default Held