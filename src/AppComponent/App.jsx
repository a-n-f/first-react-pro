import UsersListComponent from "../UsersListComment/UsersListComment.jsx";


const App = () => {
  
  return (
    <div className={` text-white flex flex-col justify-center items-center`}>
      
      <header className="bg-gray-800/90 w-full flex justify-center items-center h-[5rem]">
        <h1 className="text-3xl font-bold">
          سامانه مدیریت کاربران
        </h1>
      </header>

      <div className="usersContainer p-6 grid bg-blue-400 w-[90%] mx-auto rounded-sm my-16 gap-5
        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        
        <UsersListComponent />

      </div>

    </div>
  )

}

export default App ;
