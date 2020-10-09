import React, { useState } from 'react'
import SuggestionBox from './SuggestionBox'

const SearchBar = () => {
    const [text, setText] = useState('')

    return  (
        <div>
            <input onChange={(e) => setText(e.target.value)}/>
            <SuggestionBox text={text}/>
        </div>
    )
}

export default SearchBar