import { createContext, useCallback, useEffect, useState } from "react";

import { findPokemon } from "../utils/pokeApi";

export const PokedexContext = createContext()

const PokedexProvider = ({ children }) => {

    const [pokemon, setPokemon] = useState([])
    const [answer, setAnswer] = useState({})
    const [win, setWin] = useState(false)
    const [loading, setLoading] = useState(true)
    const [score, setScore] = useState(0)

    const randomPokemonIds = (from = 1, until = 150, count = 4) => {
        const ids = [];
        while (ids.length < count) {
            const randomId = Math.floor(Math.random() * until) + from;
            if (!ids.includes(randomId)) {
                ids.push(randomId);
            }
        }
        return ids;
    }
    const randomAnswer = (data) => {
        const randomNumber = Math.floor(Math.random() * data.length)
        console.log(randomNumber)
        return setAnswer(data[randomNumber])
    }

    const fetchPokemon = useCallback(async () => {
        setLoading(true)
        const randomIds = randomPokemonIds()
        const pokemonData = []
        for (let i = 0; i < randomIds.length; i++) {
            await findPokemon(randomIds[i])
                .then(data => {
                    pokemonData.push(data)
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
        setPokemon(pokemonData)
        randomAnswer(pokemonData)
    }, [])

    const tryPokemonNameButton = () => {
        let pokemonName = document.querySelector(".multipleChoice_optionActive h4").textContent
        if (pokemonName && pokemonName !== answer.name) {
            console.log("perdiste")
            return setScore(score - 1)

        }
        setWin(true)
        setScore(score + 1)
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

    const handleHorizontalButtons = () => {
        if (win) return
        const options = document.getElementsByClassName("multipleChoice_optionContainer")
        if (!Array.from(options).some(opt => opt.classList.contains("multipleChoice_optionActive"))) {
            return document.getElementsByClassName("multipleChoice_optionContainer")[0].classList.add("multipleChoice_optionActive")
        }
        const optionNumber = Array.from(options).findIndex(opt => opt.classList.contains("multipleChoice_optionActive"))
        if (optionNumber >= 0) {
            document.getElementsByClassName("multipleChoice_optionContainer")[optionNumber].classList.remove("multipleChoice_optionActive")
        }
        switch (optionNumber) {
            case 0:
                document.getElementsByClassName("multipleChoice_optionContainer")[1].classList.add("multipleChoice_optionActive")
                break
            case 1:
                document.getElementsByClassName("multipleChoice_optionContainer")[0].classList.add("multipleChoice_optionActive")
                break
            case 2:
                document.getElementsByClassName("multipleChoice_optionContainer")[3].classList.add("multipleChoice_optionActive")
                break
            case 3:
                document.getElementsByClassName("multipleChoice_optionContainer")[2].classList.add("multipleChoice_optionActive")
                break
            default: document.getElementsByClassName("multipleChoice_optionContainer")[0].classList.add("multipleChoice_optionActive")
        }
    }
    const handleVerticalButtons = () => {
        if (win) return
        const options = document.getElementsByClassName("multipleChoice_optionContainer")
        if (!Array.from(options).some(opt => opt.classList.contains("multipleChoice_optionActive"))) {
            return document.getElementsByClassName("multipleChoice_optionContainer")[0].classList.add("multipleChoice_optionActive")
        }
        const optionNumber = Array.from(options).findIndex(opt => opt.classList.contains("multipleChoice_optionActive"))
        if (optionNumber >= 0) {
            document.getElementsByClassName("multipleChoice_optionContainer")[optionNumber].classList.remove("multipleChoice_optionActive")
        }
        switch (optionNumber) {
            case 0:
                document.getElementsByClassName("multipleChoice_optionContainer")[2].classList.add("multipleChoice_optionActive")
                break
            case 1:
                document.getElementsByClassName("multipleChoice_optionContainer")[3].classList.add("multipleChoice_optionActive")
                break
            case 2:
                document.getElementsByClassName("multipleChoice_optionContainer")[0].classList.add("multipleChoice_optionActive")
                break
            case 3:
                document.getElementsByClassName("multipleChoice_optionContainer")[1].classList.add("multipleChoice_optionActive")
                break
            default: document.getElementsByClassName("multipleChoice_optionContainer")[0].classList.add("multipleChoice_optionActive")
        }
    }

    return (
        <PokedexContext.Provider value={{ answer, pokemon, win, loading, score, tryPokemonNameButton, nextPokemon, handleHorizontalButtons, handleVerticalButtons }}>
            {children}
        </PokedexContext.Provider>
    )
}

export default PokedexProvider