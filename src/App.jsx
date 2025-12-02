import { useState } from "react"
import GusetComponent from "./GuestComponent/GuestComponent.jsx"
import UserComponent from "./UserComponent/UserComponent.jsx";
import style from "./App.module.css";


function App() {

  console.log("App Fn");
  
  const [isLogin , setIsLogin] = useState(false) ;

  return (
    <div className={style.container}>
    
      <header className={style.header}>
        <p className={style.desHead}>AM</p>
        <button className={style.btnHead} onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Logout" : "Login"}
        </button>
      </header>
      
      {isLogin ? <UserComponent /> : <GusetComponent />}

    </div>
  )
}

export default App
