import React, { useState, ReactElement } from 'react'
import Generations from './Generations'
import MoveList from './MoveList'

interface Props {
    moves: [
        {
            move: {
                name: string
                url: string
            }
            version_group_details: [versionDetails]
        }
    ]
}

type versionDetails = {
    level_learned_at: number
    move_learn_method: {
        name: string
        url: string
    }
    version_group: {
        name: string
        url: string
    }
}

const Moves = (props: Props): ReactElement => {
    const [generation, setGeneration] = useState('sun-moon')

    const generations = props.moves.reduce((total: { [key: string]: any }, currentValue) => {
        if (typeof total !== 'object') {
            total = {}
        }

        currentValue.version_group_details.forEach((move: versionDetails) => {
            const key: string = move.version_group.name
            const newObj = {
                name: currentValue.move.name,
                level: move.level_learned_at,
                method: move.move_learn_method.name,
                mId: move.move_learn_method.url.match(/\/[0-9]+\//)![0],
                vId: move.version_group.url.match(/\/[0-9]+\//)![0]
            }

            if (typeof total[key] === 'undefined') {
                total[key] = []
                total[key].push(newObj)
            } else {
                total[key].push(newObj)
            }
        })

        return total
    }, {})

    const changeGeneration = (generation: string) => {
        setGeneration(generation)
    }

    return (
        <div>
            <Generations generations={generations} changeGeneration={changeGeneration} />
            <MoveList moveList={generations[generation]} />
        </div>
    )
}

export default Moves
