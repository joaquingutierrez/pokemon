import { useContext } from "react"

import PrintImage from "../../components/PrintImage"
import "./style.css"
import { PokedexContext } from "../../context"
import MultipleChoice from "../../components/MultipleChoice"

const WhosThat = () => {

    const { answer, pokemon, win, loading, score } = useContext(PokedexContext)

    return (
        <section className="screen1">
            <h2 className="screen1_title">Who's that Pokemon?</h2>
            <h3 className="screen1_score">Score: {score}</h3>
            <div className="buttonLabel">
                {win ? <h4>Next</h4> : <h4>Don't know!</h4>}
                <div className="tiny_green"></div>
            </div>
            <div className="screen1_gameContent">
                <div className="screen1_info">
                    <MultipleChoice options={pokemon.map(pokemon => pokemon.name)} />
                </div>
                {loading ? (
                    <h4>Cargando...</h4>
                ) : (
                    <div className="screen1_game">
                        <PrintImage image={answer?.sprites?.front_default} dark={!win} />
                    </div>
                )}
            </div>
        </section>
    )
}

export default WhosThat