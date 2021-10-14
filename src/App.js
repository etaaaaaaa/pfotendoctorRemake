import './index.css'
import Intro from "./components/Intro/Intro";
import Form from './components/Form/Form';

function App() {
  return (
    <div className="container">
      <a href="https://pfotendoctor.de/" className="btn_back">Zurück zur Webseite</a>
      <Intro />
      <Form />
    </div>
  );
}

export default App;
