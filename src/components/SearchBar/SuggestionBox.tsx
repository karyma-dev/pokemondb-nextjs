import Pokemons from '../../assets/data/Pokemons'
import Berries from '../../assets/data/Berries'

const SuggestionBox = ({text, autoComplete}) => {
    const renderSuggestions = () => {
        let suggestions = []

        Pokemons.forEach(pokemon => {
            if(pokemon.includes(text.toLowerCase())){
                suggestions = [...suggestions, { [pokemon]: 'pokedex' }]
            }
        })

        Berries.forEach(berry => {
            if(berry.includes(text.toLowerCase())){
                suggestions = [...suggestions, { [berry]: 'berries' }]
            }
        })

        function sortByKey(array, key) {
            return array.sort((a, b) => {
              let x = a[key];
              let y = b[key];
              
              return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        }

        suggestions.sort((a, b) => {
            if(Object.keys(a) > Object.keys(b)){
                return 1
            } else {
                return -1
            }
        })

        return suggestions.map((data, i) => <li key={i} onClick={() => autoComplete(data)}>{Object.keys(data)}</li>)
    }

    const render = text ? renderSuggestions() : null

    return (
        <ul>
            {render}
        </ul>
    )
}

export default SuggestionBox