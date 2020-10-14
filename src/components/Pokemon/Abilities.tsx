const Abilities = (props) => {
    console.log(props)
    const abilities = props.abilities.map(({ability}, i) => <li className="capitalize" key={i}>{ability.name}</li>)


    return (
        <div>
            {abilities}
        </div>
    )
}

export default Abilities