import { useState } from "react"

const ProblemDescriptionComponent = () => {
    const [problemDescription, setProblemDescription] = useState('')
    
    return (
        <>
         <span className="form_description-title">Deine Frage an den Tierarzt oder das Problem deines Tieres*</span>   
         <span className="form_description-txt">Damit sich der Tierarzt schon vor der Sprechstunde mit deiner Frage beschäftigen kann. Eine kurze Beschreibung reicht aus.</span>
         <label className="form_textarea-title" for="problemDescription">0/2000 Zeichen</label>
         <textarea className="form_textarea" id="problemDescription" name="problemDescription" rows="17" cols="45" value={problemDescription} 
                   onChange={e => setProblemDescription(e.target.value)}></textarea>

         <span className="form_description-title">Bilder, Videos und Dokumente</span>
         <span className="form_description-txt">Diese schaut sich dein Tierarzt vor deiner Konsultation an.</span>
         <input className="form_description-upload" type="file" id="myFile" name="filename" />
        </>
    )
}

export default ProblemDescriptionComponent
