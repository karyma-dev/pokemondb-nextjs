import React, { ReactElement } from 'react'

interface Props {
    stats: [
        {
            base_stat: number
            effort: number
            stat: {
                name: string
                url: string
            }
        }
    ]
}

const Stats = (props: Props): ReactElement => {
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
