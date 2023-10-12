import { createContext, useCallback, useEffect, useRef, useState } from "react";

import { findPokemon } from "../../utils/pokeApi";

export const PokedexContext = createContext()

const PokedexProvider = ({ children }) => {

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
            .then(data => { 
                setPokemon(data) 
                console.log(data.name)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    const tryPokemonNameButton = () => {
        let pokemonName = document.getElementById("nameInput")
        if (pokemonName.value.toLowerCase() !== pokemon.name) {
            console.log("perdiste")
            pokemonName.value = ""
            return
        }
        setWin(true)
        score.current++
        console.log(score)
        console.log("Ganaste")
    }

    const nextPokemon = () => {
        setWin(false)
        fetchPokemon()
    }

    useEffect(() => {
        fetchPokemon()
    }, [fetchPokemon])


    return (
        <PokedexContext.Provider value={{ pokemon, win, loading, score, tryPokemonNameButton, nextPokemon }}>
            {children}
        </PokedexContext.Provider>
    )
}

export default PokedexProvider