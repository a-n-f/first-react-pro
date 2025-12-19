import ChildeComponent from "../ChildeComponent/ChildeComponent.jsx";
import CounterComponent from "../CounterComponent/counterComponent.jsx";
import { useState } from "react";

const App = () => {
  console.log("appcomponent");
  
  const [number, setNumber] = useState(64)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center">
      
      <ChildeComponent />
      <CounterComponent number={number} setNumber={setNumber} />

    </div>
  )

}

export default App ;
