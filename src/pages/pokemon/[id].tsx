import React,{ useState } from 'react'
import { useRouter } from 'next/router'
import Axios from 'axios'

const Pokemon = () => {
    const [loading, setLoading] = useState(true)
    const [pokemon, setPokemon] = useState()
    const [errorMsg, setErrorMsg] = useState('')

    const router = useRouter()
    const name = router.query.id

    if(name){
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(({data}) => {
                setPokemon(data)
                setLoading(false)
                console.log(data)
            })
            .catch((err) => setErrorMsg('Pokemon Not Found'))
    }

    if(loading){
        return <h1>Loading</h1>
    } else {
        return (
            <div>
                { errorMsg }
                <h1>Pokemon</h1>
            </div>
        )
    }
}

export default Pokemon