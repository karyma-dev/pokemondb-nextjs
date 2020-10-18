import React, { useState } from 'react'
import { useRouter } from 'next/router'
import SuggestionBox from './SuggestionBox'
import SearchIcon from '../../assets/img/icons/Search.svg'

import styles from './index.module.css'

const SearchBar: React.FC = () => {
    const router = useRouter()
    const [text, setText] = useState('')

    const autoComplete = (data) => {
        const a = Object.values(data)
        const b = Object.keys(data)
        const route = `/${a}/${b}`

        router.push(route)
    }

    return (
        <div className={styles.form}>
            <div className={styles.container}>
                <input
                    className={styles.input}
                    onChange={(e: React.FormEvent<HTMLInputElement>) => setText(e.target.value)}
                    value={text}
                />
                <img className={styles.icon} src={SearchIcon} alt="Search Icon" />
            </div>
            <SuggestionBox text={text} autoComplete={autoComplete} />
        </div>
    )
}

export default SearchBar
