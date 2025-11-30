import { useState } from "react"
import ChildComponent from "./ChildComponent.jsx"

const users = [
  {name:"Ali" , age:21 , job:"js dev"},
  {name:"amir" , age:26 , job:"and dev"},
  {name:"hasan" , age:41 , job:"java dev"},
  {name:"mmd" , age:29 , job:"ios dev"},
  {name:"reza" , age:27 , job:"mac dev"},
]

function App() {

  console.log("App Fn");
  
  const [initialUsers , setUsers] = useState(users) ;

  const handelDelet = (name) => {
    const newUser = initialUsers.filter(user => user.name !== name)
    setUsers(newUser)
  }
  
  return (
    <div>
    
      {initialUsers.map(user => (
        <>
          <ChildComponent key={user.name} {...user} handelDelet={handelDelet}/>
          <hr />
        </>
      ))}

    </div>
  )
}

export default App
