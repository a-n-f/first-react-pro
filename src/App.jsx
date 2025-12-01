import { useState } from "react"
import GusetComponent from "./GusetComponent.jsx"
import UserComponent from "./UserComponent.jsx";


function App() {

  console.log("App Fn");
  
  const [isLogin , setIsLogin] = useState(false) ;

  return (
    <div>
    
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Logout" : "Login"}
      </button>
      
      {isLogin ? <UserComponent /> : <GusetComponent />}

      <hr />

    </div>
  )
}

export default App
