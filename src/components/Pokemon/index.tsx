import React from 'react'

import Evolution from './Evolution'
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

            <Evolution pokemon_name={pokemon.name} evolution_chain={pokemon.species.evolution_chain}/>
            <Held held_items={pokemon.held_items}/>
        </div>
    )
}

export default Pokemon