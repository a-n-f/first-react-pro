import ChildComponent from "./ChildComponent.jsx"

function App() {
  
  const users = [
    {name:"Ali" , age:21 , job:"js dev"},
    {name:"amir" , age:26 , job:"and dev"},
    {name:"hasan" , age:41 , job:"java dev"},
    {name:"mmd" , age:26 , job:"ios dev"},
    {name:"reza" , age:27 , job:"mac dev"},
  ]

  return (
    <div>
    
    {users.map(user => (
      <>
        <ChildComponent key={user.name} name={user.name} age={user.age} job={user.job} />
        <hr/>
      </>
    ))}

    </div>
  )
}

export default App
