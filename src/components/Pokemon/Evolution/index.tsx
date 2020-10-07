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
            evoChain = [...evoChain, {
                "species_name": evoData.species.name,
                "min_level": null,
                "min_happiness": null,
                "trigger_name": null,
                "item": null
            }]

            evoData.evolves_to.forEach((evoData) => {
                let evoDetails = evoData.evolution_details[0]
                evoChain = [...evoChain, {
                    "species_name": evoData.species.name,
                    "min_level": evoDetails ? evoDetails.min_level : null,
                    "min_happiness": evoDetails ? evoDetails.min_happiness : null,
                    "trigger_name": evoDetails ? evoDetails.trigger.name : null,
                    "item": evoDetails ? evoDetails.item : null
                }]
            })

            return <Description evoChain={evoChain} multi/>

        } else {

            do {
                let evoDetails = evoData.evolution_details[0]
    
                evoChain.push({
                    "species_name": evoData.species.name,
                    "min_level": !evoDetails ? null : evoDetails.min_level,
                    "min_happiness": !evoDetails ? null : evoDetails.min_happiness,
                    "trigger_name": !evoDetails ? null : evoDetails.trigger.name,
                    "item": !evoDetails ? null : evoDetails.item
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