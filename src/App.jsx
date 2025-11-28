import Header from "./components/Header";
import Main from "./components/Main";
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
