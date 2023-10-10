import "./style.css"

const PrintImage = ({image, dark}) => {
    return (
        <img src={image} alt="Guess" className={`guessImage ${!dark && "light"}`} />
    )
}

export default PrintImage