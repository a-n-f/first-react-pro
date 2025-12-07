import UsersComponent from "../UsersComponent/UsersComponent.jsx"
import PostsComponent from "../PostsComponent/PostsComponent.jsx"
import { Routes, Route, NavLink } from "react-router";

// https://jsonplaceholder.typicode.com/users

const App = () => {
  
  return (
    <div className={`bg-white max-w-[50%] mx-auto my-[10%] h-160 border-2 border-gray-200 rounded-2xl p-2 overflow-hidden flex flex-col`}>

      <div className={`h-[20%] flex flex-col justify-between items-center border-b-2 border-gray-300 p-4 `}>
        <h1 className={`font-bold text-2xl`}>React App</h1>

        <div className={`flex gap-12`}>
          <NavLink
            to="/users"
            className={({isActive}) => `cursor-pointer transition duration-100 text-white text-xl py-1 px-4 text-center rounded-lg
            ${isActive ? "bg-[#a674d5]" : "bg-gray-500"}
            `}>
            users
          </NavLink>
          <NavLink
            to="/posts"
            className={({isActive}) => `cursor-pointer transition duration-100 text-white text-xl py-1 px-4 text-center rounded-lg
            ${isActive ? "bg-[#a674d5]" : "bg-gray-500"}
            `}>
            posts
          </NavLink>
        </div>
      </div>

      <div className={`h-[80%] p-4 `}>
          <Routes>
              <Route path="/users" element={<UsersComponent />} />
              <Route path="/posts" element={<PostsComponent />} />
          </Routes>
      </div>

    </div>
  )

}

export default App
