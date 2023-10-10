import "./style.css"

const Pokedex = ({ screen1, screen2 }) => {
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
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="direction_buttons"></div>
                </div>
            </div>
            <div className="pokedex_hinge"></div>
            <div className="pokedex_right">

            </div>
        </section>
    )
}

export default Pokedex