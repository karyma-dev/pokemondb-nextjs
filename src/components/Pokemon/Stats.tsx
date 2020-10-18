const Stats = (props) => {
    const stats = props.stats.map((stats, i) => {
        const stat = stats.stat

        return (
            <li key={i}>
                {stat.name}: {stats.base_stat}
            </li>
        )
    })

    return (
        <div>
            Stats:
            {stats}
        </div>
    )
}

export default Stats
