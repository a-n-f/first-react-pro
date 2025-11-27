import { useState } from "react"
import ChildComponent from "./ChildComponent.jsx"

function App() {
  console.log("OK");
  
  const [txt, setTxt] = useState("Hello amir")

  const changeTxt = () => {
    setTxt("Thanke you for click amir :))")
  }

  return (
    <div>
    
      <button onClick={changeTxt}>click me for edit text</button>
      <ChildComponent title={txt} />

    </div>
  )
}

export default App
