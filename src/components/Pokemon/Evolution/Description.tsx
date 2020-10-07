import styles from './Description.module.css'

const Description = ({evoChain, multi, child}) => {
    if(multi){
        let paragraph = `<span class="capitalize"><a href="${child}">${child}</a></span> evolves to `
        console.log(evoChain)
        for(let i = 0; i < evoChain.length; i++){
            let pokemon = evoChain[i]
            paragraph += `<span class="capitalize"><a href="${pokemon}">${pokemon}</a></span>`

            if(i === evoChain.length - 1){
                paragraph += '.'
            } else {
                paragraph += ' / '
            }
        }

        return <p dangerouslySetInnerHTML={{ __html: paragraph }}></p>
    }
}

export default Description