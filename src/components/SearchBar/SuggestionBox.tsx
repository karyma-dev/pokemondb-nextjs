import Suggestions from './Suggestions'

const SuggestionBox = ({text}) => {
    const renderSuggestions = () => {
        const filteredSuggestions = Suggestions.filter((data) => {
            if(data.includes(text)){
                return true
            }
        })

        return filteredSuggestions.map((data) => <li>{data}</li>)
    }

    const autoComplete = text ? renderSuggestions() : null


    return (
        <ul>
            {autoComplete}
        </ul>
    )
}

export default SuggestionBox