import styles from './Description.module.css'

const Description = ({evoChain, multi}) => {

    if(multi) {
        let a = evoChain[0].species_name

        const filteredList = evoChain.filter(pokemon => {
            if(pokemon.species_name === a) {
                return false
            }

            return true
        }).map(pokemon => {
            return (
                <>
                    <span className={styles.cap}>{a}</span> evolves to <span className={styles.cap}>{pokemon.species_name}</span>.{"  "}
                </>
            )
        })

        return (
            <>
                {filteredList}
            </>
        )
    }
}

export default Description