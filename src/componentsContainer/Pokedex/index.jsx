import { useContext, useState } from "react"
import "./style.css"
import { PokedexContext } from "../../context"

const Pokedex = ({ screen1, screen2 }) => {
    const [isMouseDown, setIsMouseDown] = useState(false);

    const { tryPokemonNameButton, nextPokemon, handleVerticalButtons, handleHorizontalButtons, win } = useContext(PokedexContext)

    const handleMouseDown = (event) => {
        setIsMouseDown(true)
        const directionButtons = document.getElementById("directionButtons")
        const x = event.clientX - directionButtons.getBoundingClientRect().left;
        const y = event.clientY - directionButtons.getBoundingClientRect().top;
        if (x < 50) {
            directionButtons.classList.add("direction_rotate_left")
            handleHorizontalButtons()
        }
        if (x > 115) {
            directionButtons.classList.add("direction_rotate_right")
            handleHorizontalButtons()
        }
        if (y < 50) {
            directionButtons.classList.add("direction_rotate_up")
            handleVerticalButtons()
        }
        if (y > 115) {
            directionButtons.classList.add("direction_rotate_down")
            handleVerticalButtons()
        }
    }
    const handleMouseUp = () => {
        const directionButtons = document.getElementById("directionButtons")
        directionButtons.classList.remove("direction_rotate_left")
        directionButtons.classList.remove("direction_rotate_right")
        directionButtons.classList.remove("direction_rotate_up")
        directionButtons.classList.remove("direction_rotate_down")
        setIsMouseDown(false)
    }

    const handleClick = (event) => {
        if (!isMouseDown) {
            handleMouseDown(event)
        } else {
            handleMouseUp()
        }
    }

    const handleBlueButton = () => {
        if (!win) {
            return tryPokemonNameButton()
        }
    }
    const handleGreenButton = () => {
        Array.from(document.getElementsByClassName("multipleChoice_optionContainer")).map(elemnt => elemnt.classList.remove("multipleChoice_optionActive"))
        nextPokemon()
    }
    const handleOrangeButton = () => {
        console.log("boton naranja")
    }
    return (
        <section id="pokedex">
            <div className="pokedex_left">
                <div className="pokedex_header">
                    <div className="pokedex_camera">
                    </div>
                </div>
                <div className="pokedex_frame1">
                    <div className="pokedex_circle_container">
                        <div className="pokedex_circle"></div>
                        <div className="pokedex_circle"></div>
                    </div>
                    <div className="pokedex_screen1">
                        {screen1}
                    </div>
                    <div className="pokedex_frame1_footer">
                        <div className="pokedex_frame1_footer_circle"></div>
                        <div className="pokedex_stripe_container">
                            <div className="pokedex_stripe"></div>
                            <div className="pokedex_stripe"></div>
                            <div className="pokedex_stripe"></div>
                        </div>
                    </div>
                </div>
                <div className="pokedex_left_buttons_container">
                    <div className="pokedex_left_tiny_buttons_container">
                        <div className="pokedex_blue_button button_shadow pokedex_buttons" onClick={handleBlueButton}></div>
                        <div className="pokedex_select_button bg_green button_shadow pokedex_buttons" onClick={handleGreenButton}></div>
                        <div className="pokedex_select_button bg_orange button_shadow pokedex_buttons" onClick={handleOrangeButton}></div>
                    </div>
                    <div className="pokedex_large_button"></div>
                    <div className="direcion_buttons_container">
                        <div id="directionButtons" className="direction_buttons button_shadow" onClick={handleClick} onMouseDown={handleClick}>
                            <div className="pokedex_direction_arrow direction_up"></div>
                            <div className="pokedex_direction_arrow direction_right"></div>
                            <div className="pokedex_direction_arrow direction_down"></div>
                            <div className="pokedex_direction_arrow direction_left"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pokedex_hinge"></div>
            <div className="pokedex_right">

            </div>
        </section>
    )
}

export default Pokedex