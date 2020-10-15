import Generation from '../../../assets/data/Generation'

const Generations = ({ generations, changeGeneration }) => {

    const mapGeneration = Generation.map((gen, i) => {
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