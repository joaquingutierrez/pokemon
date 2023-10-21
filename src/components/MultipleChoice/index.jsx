import "./style.css"

const MultipleChoice = ({ options }) => {

    const renderOption = (option, index) => {
        return (
            <div className="multipleChoice_optionContainer" key={`choice_${index}`} id={`choice_${index}`}>
                <h4 className="multipleChoice_optionTitle">{option}</h4>
            </div>
        )
    }


    return (
        <section className="multipleChoice_container">
            {options.map((opt, index) => {
                return (
                    renderOption(opt, index)
                )
            })}
        </section>
    )
}

export default MultipleChoice