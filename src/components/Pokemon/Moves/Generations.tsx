import React, { ReactElement } from 'react'
import Generation from '../../../assets/data/Generation'

interface Props {
    generations: {
        [key: string]: []
    }
    changeGeneration: (generation: string) => void
}

const Generations = ({ generations, changeGeneration }: Props): ReactElement => {
    const mapGeneration: JSX.Element[] = Generation.map((gen, i) => {
        return (
            <button
                key={i}
                onClick={() => changeGeneration(gen.name)}
                disabled={generations[gen.name] ? false : true}>
                {gen.number}
            </button>
        )
    })

    return <div>{mapGeneration}</div>
}

export default Generations
