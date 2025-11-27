import FunctionalComponent from "./functionalComponent.jsx"
import ClassComponent from "./ClassComponent.jsx"
import { Fragment } from "react"

function App() {
  
  let userName = prompt("enter the name :: ")
  
  return (
   <Fragment>
    
    <div>
      <h1>WELCOM</h1>
      {userName === "amir" ? <h3>hello amir :)</h3> : <h3>please com Back {userName} :( </h3>}
    </div>

    <FunctionalComponent />
    <br/>
    <ClassComponent />

   </Fragment>
  )
}

export default App
