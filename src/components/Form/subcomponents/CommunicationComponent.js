import { useState } from "react"
import ButtonGroup from "../extras/ButtonGroup"
import Popup from "./Popup"

const CommunicationComponent = () => {
    const [contactType, setContactType] = useState('')
    const [popup, setPopup] = useState('false')
    return (
        <>
        <span className="form_text">Wie möchtest du mit dem Tierarzt sprechen?</span>            
        <div className="form_communication-btns">
            <ButtonGroup buttons={["Videochat per Smartphone", "Rückruf erhalten"]} infoPiece={contactType} set={setContactType} />
        </div>
        <img className="form_communication-info-pic" src="https://pfotendoctor.de/icons/information.svg" alt="information" />
        <span className="form_communication-info" onClick={() => setPopup(true)}>Wie funktioniert der Videochat?</span>
        <Popup trigger={popup} setTrigger={setPopup} />
        </>
    )
}

export default CommunicationComponent
