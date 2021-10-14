import Button from "../extras/Button"
import { useState } from "react"
import ButtonGroup from "../extras/ButtonGroup"

const AnimalInfoComponent = () => {

    const [animalName, setAnimalName] = useState('')
    const [animalType, setAnimalType] = useState('')

    return (
        <>
        <span className="form_text">Was für ein Tier hast du?</span>  
        <div className="form_animalInfo-btns">
            <ButtonGroup buttons={["Hund", "Katze", "Heimtier (Hase, etc.)", "Pferd"]}  infoPiece={animalType} set={setAnimalType} />
        </div>

        <span className="form_text">Wie heißt dein Tier?*</span>
        <input className="form_animal-name" placeholder="Max" value={animalName} onChange={(e) => setAnimalName(e.target.value)}></input>
        </>
    )
}

export default AnimalInfoComponent
