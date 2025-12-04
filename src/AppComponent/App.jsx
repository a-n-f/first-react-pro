import { useEffect , useReducer} from "react"

const initialState = {
  data: null ,
  loading: true ,
  error: null ,
}

const dataReducer = (state, action) => {
  switch (action.type) {

    case "FETCH-START":
      return {loading:true , data:null , error:null} ;

    case "FETCH-SUCCESS":
      return {loading:false , data:action.payload , error:null} 

    case "FETCH-ERROR":
      return {loading:false , data:null , error:action.payload} 
    
    default:
      return state
  }
}


// https://jsonplaceholder.typicode.com/users

const App = () => {
  
  const [state, dispatch] = useReducer(dataReducer, initialState)

  useEffect(() => {
    dispatch({type:"FETCH-START"})

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        console.log(data);

        dispatch({type:"FETCH-SUCCESS" , payload:data})
      })
      .catch(
        dispatch({type:"FETCH-ERROR" , payload:"خطا در گرفتن دیتا"})
      )
  }, [])
  

  if (state.loading) {
    return (
      <div className={``}>
        <div>
          <strong>درحال دریافت اطلاعات</strong>
        </div>
      </div>
    ) 
  }

  if (state.error) {
    return(
      <div className={``}>
        <div>
          <strong>{state.error}</strong>
        </div>
      </div>
    )
  }

  return(
    <div className="flex items-center justify-center flex-col">
      <h1>list users</h1>
      <div className="flex max-w-[80%] flex-wrap gap-12 mt-8 justify-center items-center">
        {state.data.map(user => (
          <div key={user.name} className="w-[20%]">
            <strong>{user.name}</strong>
            <p>{user.username}</p>
            <span>{user.email}</span>
          </div>
        ))}
      </div>
    </div>
  )

}

export default App
