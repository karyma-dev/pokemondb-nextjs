import React, { useState } from 'react'
import { useRouter } from 'next/router'
import SuggestionBox from './SuggestionBox'

const SearchBar = () => {
    const router = useRouter()
    const [text, setText] = useState('')
    

    const autoComplete = (data) => {
        const a = Object.values(data)
        const b = Object.keys(data)
        const route = `/${a}/${b}`

        router.push(route)
    }

    return  (
        <div>
            <input onChange={(e) => setText(e.target.value)} value={text}/>
            <SuggestionBox text={text} autoComplete={autoComplete} />
        </div>
    )
}

export default SearchBar