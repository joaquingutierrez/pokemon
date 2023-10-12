import { useContext } from "react"

import PrintImage from "../../components/PrintImage"
import InputAndButton from "../../components/InputAndButton"
import "./style.css"
import { PokedexContext } from "../../components/context"

const WhosThat = () => {

    const { pokemon, win, loading, score } = useContext(PokedexContext)

    return (
        <section className="screen1">
            <div className="screen1_info">
                <h2>Who's that Pokemon?</h2>
                <InputAndButton />
                <h3>Score: {score.current}</h3>
            </div>
            {loading ? (
                <h4>Cargando...</h4>
            ) : (
                <div className="screen1_game">
                    <PrintImage image={pokemon?.sprites?.front_default} dark={!win} />
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