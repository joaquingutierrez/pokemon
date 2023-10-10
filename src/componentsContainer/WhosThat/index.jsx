import { useCallback, useEffect, useRef, useState } from "react"

import PrintImage from "../../components/PrintImage"
import { findPokemon } from "../../utils/pokeApi"
import InputAndButton from "../../components/InputAndButton"

const WhosThat = () => {

    const [pokemon, setPokemon] = useState({})
    const [win, setWin] = useState(false)
    const [loading, setLoading] = useState(true)
    const score = useRef(0)

    const randomPokemonId = (from = 0, until = 150) => {
        return parseInt(from + Math.random() * until)
    }

    const fetchPokemon = useCallback(() => {
        setLoading(true)
        findPokemon(randomPokemonId())
            .then(data => setPokemon(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false) )
    },[])

    const tryPokemonNameButton = (pokemonName) => {
        if (pokemonName === pokemon.name) {
            setWin(true)
            score.current++
            console.log(score)
            return console.log("Ganaste")
        }
        console.log("perdiste")
    }

    const nextPokemon = () => {
        setWin(false)
        fetchPokemon()
    }

    useEffect(() => {
        fetchPokemon()
    }, [fetchPokemon])

    return (
        <>
            <h2>WhosThat</h2>
            <h4>{pokemon.name}</h4>
            <h3>Score: {score.current}</h3>
            {loading ? (
                <h4>Cargando...</h4>
            ) : (
                <div>
                    <PrintImage image={pokemon?.sprites?.front_default} dark={!win} />
                    <InputAndButton handleButton={tryPokemonNameButton} />
                    {win && <button onClick={nextPokemon}>Next</button>}
                </div>
            )}
        </>
    )
}

export default WhosThat