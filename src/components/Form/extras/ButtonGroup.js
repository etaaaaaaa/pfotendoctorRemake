import { useState } from "react"
const ButtonGroup = ({ buttons, infoPiece, set }) => {
    const [clickedId, setClickedId] = useState(-1)

    return (
        <>
          {buttons.map((buttonLabel, i) => (
              <button key={i} 
                      name={buttonLabel}  
                      type="button" 
                      value={infoPiece} 
                      onClick={() => {
                           set(buttonLabel)
                           setClickedId(i)}}
                      className={i === clickedId ? "form_btn active" : "form_btn"}>
                  {buttonLabel}
              </button>
          ))}  
        </>
    )
}

export default ButtonGroup
