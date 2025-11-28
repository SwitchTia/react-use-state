import Header from "./components/Header";
import { languages } from "./assets/languages";


function App() {

  return (
    <>
     <Header/>
     <Main languages={languages}/>
    </>
  )
}

export default App
