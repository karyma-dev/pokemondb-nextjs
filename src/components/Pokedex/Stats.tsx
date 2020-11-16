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
            <div className="capitalize" key={i}>
                <strong>{stat.name}:</strong> {stats.base_stat}
            </div>
        )
    })

    return (
        <div>
            <strong>Stats</strong>
            {stats}
        </div>
    )
}

export default Stats
