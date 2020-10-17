import { FC } from 'react'
import Generation from '../../../assets/data/Generation'

interface Props { 
    generations: any, 
    changeGeneration: Function 
}

const Generations: FC<Props> = ({ generations, changeGeneration }) => {

    const mapGeneration : JSX.Element[] = Generation.map((gen, i) => {
        return <button 
            key={i}
            onClick={() => changeGeneration(gen.name)} 
            disabled={generations[gen.name] ? false : true}>
                {gen.number}
            </button>
    })

    return (
        <div>
            {mapGeneration}
        </div>
    )
}

export default Generations