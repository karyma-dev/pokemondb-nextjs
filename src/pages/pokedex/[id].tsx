import React, { useEffect, useState } from 'react'
import Pokemon from '../../components/Pokemon'
import { useRouter } from 'next/router'
import axios from 'axios'

const Pokedex = () => {
    const [pokemon, setPokemon] = useState(null)
    const [loading, setLoading] = useState(true)

    const router = useRouter()

    useEffect(() => {
        const name = router.query.id
        if(name){
            let pokemonData
            axios.get(`https://pokeapi.co/api/v2/pokemon/${String(name).toLowerCase()}`)
                .then(res => {
                    pokemonData = res.data
                    return axios.get(res.data.species.url)
                })
                .then(res => {
                    pokemonData = {...pokemonData, species: res.data }

                    setPokemon(pokemonData)
                    setLoading(false)
                })
        }
    }, [router])

    if(loading) {
        return <h1>Loading...</h1>
    } else {
        return <Pokemon pokemon={pokemon}/>
    }
}

export default Pokedex