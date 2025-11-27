import { Fragment } from "react"
import Car from "./Car"

function App() {
  
  let userName = prompt("enter the name :: ")
  
  return (
    <div>
    
      <h1>WELCOM</h1>
      {userName === "amir" ? <h3>hello amir :)</h3> : <h3>please com Back {userName} :( </h3>}
    
      <Car  make="Honda" model="2024" year="2001" color="red" price="1_000_400" />
      <Car  make="BMW" model="2030" year="2024" color="blue" price="3_600_000" />
    
    </div>
  )
}

export default App
