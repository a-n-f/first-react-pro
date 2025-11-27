import { useState } from "react"

function App() {
  
  const [txt, setTxt] = useState("Hello")

  const changeTxt = () => {
    setTxt("Hey, my name's ali")
  }

  return (
    <div>
    
      <button onClick={changeTxt}>click me for edit text</button>
      <p>{txt}</p>

    </div>
  )
}

export default App
