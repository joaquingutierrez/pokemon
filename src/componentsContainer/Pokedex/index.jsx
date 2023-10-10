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
                    <div className="pokedex_screen1">
                        {screen1}
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