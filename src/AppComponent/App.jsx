import UsersComponent from "../UsersComponent/UsersComponent.jsx";
import PostsComponent from "../PostsComponent/PostsComponent.jsx";
import AddUserComponent from "../AddUserComponent/AddUserComponent.jsx";
import UserDetailsComponent from "../UserDetailsComponent/UserDetailsComponent.jsx";
import { Routes, Route, NavLink, useNavigate, Navigate } from "react-router";

// https://jsonplaceholder.typicode.com/users

const App = () => {
  
  let goToHowPage = true ;

  const navigate = useNavigate()

  const handleClickToNavigate = async () => {
    await new Promise(resolve => setTimeout(resolve , 3000)).then(console.log("handleClickToNavigate"))
    navigate("/users" , {state: {dataApp : "userAmir" , passApp:12345}})
  }
  
  return (
    <div className={`bg-white max-w-[50%] mx-auto my-[10%] h-160 border-2 border-gray-200 rounded-2xl p-2 overflow-hidden flex flex-col`}>

      {goToHowPage ? <Navigate to={"/posts"}/> : null }

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
          <button onClick={handleClickToNavigate} className="bg-[#a674d5] cursor-pointer text-white rounded-sm p-1 uppercase">
            users by navigate
          </button>
        </div>
      </div>

      <div className={`h-[80%] p-4 `}>
          <Routes>
              <Route path="/users" element={<UsersComponent />} >
                <Route path="add-user" element={<AddUserComponent />} />
                <Route path="user-details/:userId" element={<UserDetailsComponent />} />
              </Route>
              <Route path="/posts" element={<PostsComponent />} />
          </Routes>
      </div>

    </div>
  )

}

export default App ;
