import React, { Component, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState(null)

    const router = useRouter()

    useEffect(() => {
        const name = router.query.id
        if(name){
            axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
                .then(res => {
                    setPokemon(res.data)
                })
        }
    }, [router])

    console.log(pokemon)

    return (
        <h1>Hello</h1>
    )

}

export default Pokemon