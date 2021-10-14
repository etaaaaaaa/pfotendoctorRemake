import React from 'react'

const Intro = () => {
    return (
        <section className="intro">
            <a href="https://pfotendoctor.de/">
              <img className="intro_logo" src="https://pfotendoctor.de/pfotendoctor-logo.svg" alt="logo" />
            </a>
            <h1 className="intro_headline">Terminbuchung</h1>
            <img className="intro_vet-heads" src="https://pfotendoctor.de/booking_tool/vet_heads.jpg" alt="vet heads" />
            <p className="intro_subheadline">Über 3500 zufriedene Tierhalterinnen und Tierhalter vertrauen Pfotendoctor</p>
            <ul className="intro_ul">
                <li className="intro_li">
                    <img className="intro_li-checkmark" src="https://pfotendoctor.de/icon_check_green_circle.svg" alt="check mark"/>
                    <span className="intro_li-text">Tierärzte mit <strong>jahrelanger Berufserfahrung</strong> lösen dein Problem Schritt für Schritt</span>
                </li>
                <li className="intro_li">
                    <img className="intro_li-checkmark" src="https://pfotendoctor.de/icon_check_green_circle.svg" alt="check mark"/>
                    <span className="intro_li-text"><strong>9 von 10 Tierhaltern</strong> würden Pfotendoctor weiterempfehlen</span>
                </li>
                <li className="intro_li">
                    <img className="intro_li-checkmark" src="https://pfotendoctor.de/icon_check_green_circle.svg" alt="check mark"/>
                    <span className="intro_li-text">Für Kunden einer Tierkrankenversicherung <strong>kostenlos</strong></span>
                </li>
            </ul>
            <img className="intro_certifications" src="https://pfotendoctor.de/buchung_signets.png" alt="certifications" />
        </section>
    )
}

export default Intro
