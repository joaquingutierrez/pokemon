import "./style.css"

const InputAndButton = ({handleButton}) => {
    let name = ""
    return (
        <div className="screen1_game_input">
            <input type="text" name="name" id="name" onKeyDown={(e) => {if (e.key === "Enter") handleButton(name)}} onChange={(e)=>name=e.target.value} />
            <button onClick={()=>handleButton(name)}>Send</button>
        </div>
    )
}

export default InputAndButton