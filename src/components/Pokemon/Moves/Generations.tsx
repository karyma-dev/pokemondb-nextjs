const Generations = ({generations, changeGeneration}) => {
    console.log(generations)

    return (
        <div>
            <span onClick={() => changeGeneration('yellow')}>I</span>
            <span onClick={() => changeGeneration('crystal')}>II</span>
            <span onClick={() => changeGeneration('emerald')}>III</span>
            <span onClick={() => changeGeneration('heartgold-soulsilver')}>IV</span>
            <span onClick={() => changeGeneration('black-2-white-2')}>V</span>
            <span onClick={() => changeGeneration('x-y')}>VI</span>
            <span onClick={() => changeGeneration('sun-moon')}>VII</span>
        </div>
    )
}

export default Generations