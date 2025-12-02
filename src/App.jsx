import { useState } from "react"
import GusetComponent from "./GuestComponent/GuestComponent.jsx"
import UserComponent from "./UserComponent/UserComponent.jsx";
import "./App.css";


const handlStyle = {
  display: "flex" ,
  flexDirection: "column" ,
}

function App() {

  console.log("App Fn");
  
  const [isLogin , setIsLogin] = useState(false) ;

  return (
    <div style={handlStyle}>
    
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Logout" : "Login"}
      </button>
      
      {isLogin ? <UserComponent /> : <GusetComponent />}

    </div>
  )
}

export default App
