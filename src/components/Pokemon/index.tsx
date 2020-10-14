import Abilities from './Abilities'
import Held from './Held'

const Pokemon = ({ pokemon }) => {
    const { abilities, held_items } = pokemon

    return (
        <div>
            Abilities
            <Abilities abilities={abilities} />

            Held Items
            <Held held={held_items}/>
        </div>
    )
}

export default Pokemon