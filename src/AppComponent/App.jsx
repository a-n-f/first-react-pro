import { useState} from "react"
import UsersComponent from "../UsersComponent/UsersComponent.jsx"
import PostsComponent from "../PostsComponent/PostsComponent.jsx"

// https://jsonplaceholder.typicode.com/users

const App = () => {
  
  const [page, setPags] = useState("users")

  return (
    <div className={`bg-white max-w-[50%] mx-auto my-[10%] h-[40rem] border-2 border-gray-200 rounded-2xl p-2 overflow-hidden flex flex-col`}>

      <div className={`h-[20%] flex flex-col justify-between items-center border-b-2 border-gray-300 p-4 `}>
        <h1 className={`font-bold text-2xl`}>React App</h1>

        <div className={`flex gap-12`}>
          <button 
            onClick={() => setPags("users")} 
            className={`cursor-pointer transition duration-100 text-white text-xl py-1 px-4 text-center rounded-lg 
            ${page === "users" ? "bg-[#a674d5]" : "bg-gray-500"}`}>
            users
          </button>
          <button 
            onClick={() => setPags("posts")} 
            className={`cursor-pointer transition duration-100 text-white text-xl py-1 px-4 text-center rounded-lg 
            ${page === "posts" ? "bg-[#a674d5]" : "bg-gray-500"}`}>
            posts
          </button>
        </div>
      </div>

      <div className={`h-[80%] p-4 `}>
        {page === "users" && <UsersComponent />} 
        {page === "posts" && <PostsComponent />}
      </div>

    </div>
  )

}

export default App
