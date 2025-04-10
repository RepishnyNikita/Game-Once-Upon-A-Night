import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer" 
import './style/main.scss'
import Main from "./components/Main/Main"
import Background from "./components/ui/Backgrounds/Background"
import { useState } from "react"
import { backgroundImageSrc } from "./components/iconSrc"


function App() {
  const [isCurrentbg, setIsCurrentBg] = useState(backgroundImageSrc.dark)

  function saveCurrentBg(background){
    setIsCurrentBg(background)
  }

  return (
    <>
        <Background src={isCurrentbg}/>
        <Header/>
        <Main/>
        <Footer currentBg={saveCurrentBg}/> 
    </>
  )
}

export default App
