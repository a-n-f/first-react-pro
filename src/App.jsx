import { useState } from "react"
import GusetComponent from "./GuestComponent/GuestComponent.jsx"
import UserComponent from "./UserComponent/UserComponent.jsx";
import "./App.css";


function App() {

  console.log("App Fn");
  
  const [isLogin , setIsLogin] = useState(false) ;

  return (
    <div className="container">
    
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Logout" : "Login"}
      </button>
      
      {isLogin ? <UserComponent /> : <GusetComponent />}

    </div>
  )
}

export default App
