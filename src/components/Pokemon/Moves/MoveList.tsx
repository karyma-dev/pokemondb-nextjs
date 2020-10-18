const MoveList = ({ moveList }) => {
    const sortedMoveList = moveList.sort((a, b) => {
        if (a.level > b.level) {
            return 1
        } else {
            return -1
        }
    })

    const mapMoveList = sortedMoveList.map((move, i) => {
        return (
            <tr key={i}>
                <td className="capitalize">{move.name}</td>
                <td className="capitalize">{move.level}</td>
                <td className="capitalize">{move.method}</td>
            </tr>
        )
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Move</th>
                    <th>LV</th>
                    <th>Obtain From</th>
                </tr>
            </thead>
            <tbody>{mapMoveList}</tbody>
        </table>
    )
}

export default MoveList
