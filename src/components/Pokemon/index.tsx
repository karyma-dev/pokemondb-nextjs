import React from 'react'

const Pokemon = ({ pokemon }) => {
    const { sprites } = pokemon
    const set = Object.entries(sprites)

    console.log(set)

    const displaySprites = set.map((sprite, i) => {
        if(typeof sprite[1] === 'string'){
            const rawName = sprite[0].match(/(?<=_).*/g)
            const name = rawName[0].replace(/_/g, ' ')
            console.log(name)

            return (
                <div>
                    <span>{name}</span>
                    <img key={i} src={sprite[1]} />
                </div>
            )
        }
    })

    return (
        <div>
            {displaySprites}
        </div>
    )
}

export default Pokemon