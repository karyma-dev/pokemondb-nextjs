const Abilities = (props) => {
    const abilities = props.abilities.map(({ability}, i) => <li className="capitalize" key={i}>{ability.name}</li>)


    return (
        <div>
            Abilities
            {abilities}
        </div>
    )
}

export default Abilities