import React, { Component, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import Pokemon from '../../components/Pokemon'

const Pokedex = () => {
    const [pokemon, setPokemon] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const router = useRouter()

    useEffect(() => {
        const name = router.query.id
        if(name){
            axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
                .then(res => {
                    setPokemon(res.data)
                    setLoading(false)
                })
                .catch(() => {
                    setError('Pokemon Not Found')
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