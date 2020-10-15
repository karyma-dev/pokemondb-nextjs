const Held = (props) => {
    const held = props.held.length > 0 ? props.held.map(({item}, i) => <li key={i}>{item.name}</li>) : "none"

    return (
        <div>
            Held Items
            {held}
        </div>
    )
}

export default Held