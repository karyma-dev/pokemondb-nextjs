import Pokemons from '../../assets/data/Pokemons'
import Berries from '../../assets/data/Berries'

import styles from './SuggestionBox.module.css'

const SuggestionBox = ({ text, autoComplete }) => {
    const renderSuggestions = () => {
        let suggestions = []
        let lowerCaseText = text.toLowerCase()

        Berries.forEach((berry) => {
            let lowerCaseBerry = berry.toLowerCase()
            if (lowerCaseBerry.includes(lowerCaseText)) {
                suggestions = [...suggestions, { [berry]: 'berry' }]
            }
        })

        Pokemons.forEach((pokemon) => {
            let lowerCasePokemon = pokemon.toLowerCase()
            if (lowerCasePokemon.includes(lowerCaseText)) {
                suggestions = [...suggestions, { [pokemon]: 'pokedex' }]
            }
        })

        suggestions.sort((a, b) => {
            if (Object.keys(a) > Object.keys(b)) {
                return 1
            } else {
                return -1
            }
        })

        return suggestions.map((data, i) => (
            <li className={styles.item} key={i} onClick={() => autoComplete(data)}>
                {Object.keys(data)}
            </li>
        ))
    }

    const render = text ? renderSuggestions() : null

    return <ul className={styles.list}>{render}</ul>
}

export default SuggestionBox
