import Pokemons from '../../assets/data/Pokemons'
import Berries from '../../assets/data/Berries'

const pokemons = Pokemons.map((pokemon) => ({ name: pokemon, type: 'pokemon' }))
const berries = Berries.map((berry) => ({ name: berry, type: 'berry' }))

const Data = [...pokemons, ...berries]

export default Data
