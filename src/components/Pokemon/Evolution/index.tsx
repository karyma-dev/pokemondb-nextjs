import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Description from './Description'

const Evolution = ({evolution_chain, pokemon_name}) => {
    const [evolution, setEvolution] = useState(null)

    useEffect(() => {
        axios.get(evolution_chain.url)
            .then(res => {
                setEvolution(res.data)
            })
    }, [])

    if(evolution) {

        let evoChain = []
        let evoData = evolution.chain

        if(evoData.evolves_to.length > 1) {
            evoData.evolves_to.forEach((evoData) => {
                evoChain = [...evoChain, evoData.species.name]
            })

            return <Description evoChain={evoChain} child={evoData.species.name} multi/>

        } else {

            do {
                evoChain.push({
                    "species_name": evoData.species.name,
                    })
    
                evoData = evoData.evolves_to[0]
                
            } while (!!evoData && evoData.hasOwnProperty('evolves_to'))

            return <Description evoChain={evoChain} multi={false}/>
        }
    } else {
        return null
    }
}

export default Evolution