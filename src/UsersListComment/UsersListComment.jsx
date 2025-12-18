import { permissionHOC } from "../permissionHOC/permissionHOC";
import { USerContext } from "../UsersContextComment/UsersContextComment";
import { useContext } from "react";

const UsersListComponent = () => {

    const {users, removeUser} = useContext(USerContext)

    return (
        users.map( (user) => (
            <div key={user.name} class="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div class="p-4 md:p-5">
                    <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                        {user.name}
                    </h3>
                    <p class="mt-2 text-gray-500 dark:text-neutral-400">
                        {user.email}
                    </p>
                    <button className="bg-red-500 rounded-sm p-2 mt-5 cursor-pointer" onClick={() => removeUser(user.name)}>remove</button>
                </div>
            </div>
        ))
    )
}

export default permissionHOC(UsersListComponent) ;