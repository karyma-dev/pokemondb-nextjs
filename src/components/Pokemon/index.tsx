import React from 'react'

import Held from './Held'
import Sprites from './Sprites'

const Pokemon = ({ pokemon }) => {
    return (
        <div>
            <div>
                <Sprites sprites={pokemon.sprites}/> 
                <h1>
                    {pokemon.name}
                </h1>
            </div>
            
            <Held held_items={pokemon.held_items}/>
        </div>
    )
}

export default Pokemon