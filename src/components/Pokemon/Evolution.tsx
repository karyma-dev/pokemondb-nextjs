import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Evolution = ({evolution_chain, pokemon_name}) => {
    const [evolution, setEvolution] = useState(null)

    useEffect(() => {
        axios.get(evolution_chain.url)
            .then(res => {
                console.log(res.data)
                setEvolution(res.data)
            })
    }, [])

    if(evolution) {

        let evoChain = [];
        let evoData = evolution.chain;
        let description = ''

        if(evoData.evolves_to.length > 1) {

            // Multiple Evolution Chains

            evoChain.push({
                "species_name": evoData.species.name
            })

            evoData.evolves_to.forEach((evoData) => {
                let evoDetails = evoData.evolution_details[0]

                evoChain.push({
                    "species_name": evoData.species.name,
                    "min_level": !evoDetails ? null : evoDetails.min_level,
                    "min_happiness": !evoDetails ? null : evoDetails.min_happiness,
                    "trigger_name": !evoDetails ? null : evoDetails.trigger.name,
                    "item": !evoDetails ? null : evoDetails.item
                })
            })

            for(let i = 1; i < evoChain.length; i++){
                let condition = ''

                switch(evoChain[i].trigger_name){
                    case 'use-item':
                        condition = `with ${evoChain[i].item.name}`
                }

                description += `${evoChain[0].species_name} evolves to ${evoChain[i].species_name} ${condition}. `
            }

        } else {

            // Single Evolution Chain

            do {
                let evoDetails = evoData['evolution_details'][0]
    
                evoChain.push({
                    "species_name": evoData.species.name,
                    "min_level": !evoDetails ? null : evoDetails.min_level,
                    "min_happiness": !evoDetails ? null : evoDetails.min_happiness,
                    "trigger_name": !evoDetails ? null : evoDetails.trigger.name,
                    "item": !evoDetails ? null : evoDetails.item
                    })
    
                evoData = evoData.evolves_to[0]
                
            } while (!!evoData && evoData.hasOwnProperty('evolves_to'))

            for(let i = 1; i < evoChain.length; i++){
                let condition = ''

                switch(evoChain[i].trigger_name){
                    case 'level-up':
                        condition = `at level ${evoChain[i].min_level}`
                }

                description += `${evoChain[i - 1].species_name} evolves to ${evoChain[i].species_name} ${condition}. `
            }
        }
        
        return (
            <div>
                {description}
            </div>
        )
    } else {
        return null
    }
}

export default Evolution