import Abilities from './Abilities'
import Held from './Held'
import Moves from './Moves'
import Stats from './Stats'
import Sprite from './Sprite'
import Type from './Type'

const Pokemon = ({ pokemon }) => {
    const { abilities, base_experience, held_items, id, moves, name, sprites, stats, types } = pokemon

    return (
        <div>
            <Sprite sprites={sprites} name={name} />
            Name: {name}
            National No: {id}
            Base Exp: {base_experience}
            <Abilities abilities={abilities} />
            <Held held={held_items} />
            <Stats stats={stats} />
            <Type types={types} />
            <Moves moves={moves} />
        </div>
    )
}

export default Pokemon