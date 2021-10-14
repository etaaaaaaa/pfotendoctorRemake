import { useState } from "react"

const InsuranceComponent = () => {
  const [insuranceType, setInsuranceType] = useState('')
  const [insuranceName, setInsuranceName] = useState('')
    return (
        <>
          <label className="form_insurance-label" htmlFor="insuranceKind">Art der Versicherung:</label>
          <select className="form_insurance-select" defaultValue="hidden" name="insuranceKind" value={insuranceType} onChange={(e) => setInsuranceType(e.target.value)}>
            <option value="hidden" disabled hidden>Art der Versicherung</option>
            <option value="OP-Versicherung">OP-Versicherung</option>
            <option value="Tierkrankenversicherung">Tierkrankenversicherung</option>
          </select>

          <label className="form_insurance-label" htmlFor="insuranceName">Name der Versicherung</label>
          <select className="form_insurance-select" defaultValue="hidden" name="insuranceName"  value={insuranceName} onChange={(e) => setInsuranceName(e.target.value)}>
            <option value="hidden" disabled hidden>Tierkrankenversicherung</option>
            <option value="ADCURI">ADCURI</option>
            <option value="Agila">Agila</option>
            <option value="Allianz">Allianz</option>
            <option value="Arag">Arag</option>
            <option value="Asspario">Asspario</option>
          </select>
        </>
    )
}

export default InsuranceComponent
