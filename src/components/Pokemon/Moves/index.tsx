const Moves = (props) => {
    let o = {}


    const generation = props.moves.reduce((total, currentValue) => {
        if(typeof total !== 'object'){
            total = {}
        }

        currentValue.version_group_details.forEach(move => {
            const key = move.version_group.name
            const newObj = {
                move: currentValue.move.name,
                level: move.level_learned_at,
                method: move.move_learn_method.name,
                mId: move.move_learn_method.url.match(/\/[0-9]+\//)[0],
                vId: move.version_group.url.match(/\/[0-9]+\//)[0]
            }

            if(typeof total[key] === 'undefined') {
                total[key] = []
                total[key].push(newObj)
            } else {
                total[key].push(newObj)
            }
        })

        return total
    })

    console.log(generation)

    return (
        <div>

        </div>
    )
}

export default Moves