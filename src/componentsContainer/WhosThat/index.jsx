import { useContext } from "react"

import PrintImage from "../../components/PrintImage"
import "./style.css"
import { PokedexContext } from "../../context"
import MultipleChoice from "../../components/MultipleChoice"

const WhosThat = () => {

    const { answer, pokemon, win, loading, score } = useContext(PokedexContext)

    return (
        <section className="screen1">
            <div className="screen1_info">
                <h2>Who's that Pokemon?</h2>
                <MultipleChoice options={pokemon.map(pokemon => pokemon.name)} />
                <h3>Score: {score}</h3>
            </div>
            {loading ? (
                <h4>Cargando...</h4>
            ) : (
                <div className="screen1_game">
                    <PrintImage image={answer?.sprites?.front_default} dark={!win} />
                </div>
            )}
            <div className="buttonLabel">
                {win ? <h4>Next</h4> : <h4>Don't know!</h4>}
                <div className="tiny_green"></div>
            </div>
        </section>
    )
}

export default WhosThat