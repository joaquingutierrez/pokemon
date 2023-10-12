import { useContext, useEffect } from "react"
import "./style.css"
import { PokedexContext } from "../../components/context"

const Pokedex = ({ screen1, screen2 }) => {

    const { tryPokemonNameButton, nextPokemon } = useContext(PokedexContext)

    useEffect(() => {
        const directionButtons = document.getElementById("directionButtons")
        directionButtons.addEventListener("mousedown", (event) => {
            const x = event.clientX - directionButtons.getBoundingClientRect().left;
            const y = event.clientY - directionButtons.getBoundingClientRect().top;
            if (x < 50) {
                directionButtons.classList.add("direction_rotate_left")
                window.addEventListener("mouseup", () => {
                    return directionButtons.classList.remove("direction_rotate_left")
                })
            }
            if (x > 115) {
                directionButtons.classList.add("direction_rotate_right")
                window.addEventListener("mouseup", () => {
                    return directionButtons.classList.remove("direction_rotate_right")
                })
            }
            if (y < 50) {
                directionButtons.classList.add("direction_rotate_up")
                window.addEventListener("mouseup", () => {
                    return directionButtons.classList.remove("direction_rotate_up")
                })
            }
            if (y > 115) {
                directionButtons.classList.add("direction_rotate_down")
                window.addEventListener("mouseup", () => {
                    return directionButtons.classList.remove("direction_rotate_down")
                })
            }
        })
    }, [])

    const handleBlueButton = () => {
        tryPokemonNameButton()
    }
    const handleGreenButton = () => {
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
                        <div id="directionButtons" className="direction_buttons button_shadow">
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