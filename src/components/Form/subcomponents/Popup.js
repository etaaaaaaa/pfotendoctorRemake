function Popup({trigger, setTrigger}) {
    return ((trigger === true) ? (
        <div className="popup_container">
            <img className="popup_close" src="https://pfotendoctor.de/close.svg" alt="close" onClick={() => setTrigger(false)} />
            <h2 className="popup_header">So einfach funktioniert der Videochat</h2>
            <p className="popup_txt">Du benötigst keine Technikkenntnisse für den Videochat. Es reichen lediglich eine stabile Internetverbindung und ein Smartphone mit Kamera.</p>
            <h3 className="popup_second-header">3 einfache Schritte</h3>
            <ol className="popup_ol">
                <li className="popup_ol_li">Du erhältst nach der Terminbuchung eine Terminbestätigung per SMS und E-Mail mit deinem Zugangscode zum Videochat sowie einem Downloadlink zur Pfotendoctor App</li>
                <li className="popup_ol_li">Du lädst dir die Pfotendoctor App runter</li>
                <li className="popup_ol_li">Starte den Videochat mit deinem Zugangscode aus deiner SMS</li>
            </ol>
            <button className="popup_btn" type="button">Videochat wählen</button>
            <button className="popup_btn" type="button">Rückruf wählen</button>
        </div>
    ) : "")
}

export default Popup
