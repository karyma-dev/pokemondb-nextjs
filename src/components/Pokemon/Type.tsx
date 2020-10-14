const Type = (props) => {
    const types = props.types.map(({type}, i ) => <li key={i}>{type.name}</li>)

    return (
        <div>
            Types:
            {types}
        </div>
    ) 
}

export default Type