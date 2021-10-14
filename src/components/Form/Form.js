import TimeBox from "./extras/TimeBox"

import CommunicationComponent from "./subcomponents/CommunicationComponent"
import AnimalInfoComponent from "./subcomponents/AnimalInfoComponent"
import InsuranceComponent from "./subcomponents/InsuranceComponent"
import ProblemDescriptionComponent from "./subcomponents/ProblemDescriptionComponent"

const Form = () => {

    return (
        <section className="form">
            <div className="form_tool-container">
                <button className="form_btn-back" type="button">Zurück</button>
                <TimeBox />
            </div>
            <form className="form_form">
                <CommunicationComponent />            
                <AnimalInfoComponent />
                <InsuranceComponent />
                <ProblemDescriptionComponent />
                <span className="form_note">* Pflichtfeld</span>
                <input className="form_submit-btn" type="submit" value="Zum Letzten Schritt" />
            </form>
        </section>
    )
}

export default Form
