import { useState } from "react";
import UsersListComponent from "../UsersListComment/UsersListComment.jsx";
import AddUserComponent from "../AddUserComponent/AddUserComponent.jsx";
import PermissionRP from "../PermissionRP/PermissionRP.jsx";


const App = () => {

  const [showModal, showModalFn] = useState(false)
  
  return (
    <div className={` text-white flex flex-col justify-center items-center`}>
      
      <header className="bg-gray-800/90 w-full flex justify-center items-center h-[5rem]">
        <h1 className="text-3xl font-bold">
          سامانه مدیریت کاربران
        </h1>
      </header>

      <div>
        <PermissionRP>
          {(name) => (
            <button onClick={() => showModalFn(true)}
              className={` cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md shadow transition duration-200 ease-in-out my-8`}>
              {name}
            </button>
          )}
        </PermissionRP>

        {showModal && <AddUserComponent showModalFn={showModalFn}/>}
      </div>

      <div className="usersContainer p-6 grid bg-blue-400 w-[90%] mx-auto rounded-sm my-16 gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        <UsersListComponent />
      </div>

      <footer className="fixed bottom-0 left-0 w-full bg-gray-800/90 flex justify-center items-center py-3 shadow-lg z-40">
        <span className="text-gray-200 text-base font-semibold">
          © {new Date().getFullYear()} سامانه مدیریت کاربران - ساخته شده با ❤️ توسط تیم شما
        </span>
      </footer>

    </div>
  )

}

export default App ;
