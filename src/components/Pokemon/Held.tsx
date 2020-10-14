const Held = (props) => {
    console.log(props.held)
    const held = props.held.length > 0 ? props.held.map(({item}, i) => <li key={i}>{item.name}</li>) : "none"

    return (
        <div>
            {held}
        </div>
    )
}

export default Held