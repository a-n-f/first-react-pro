import { createContext, useState } from "react";

let initialUsers = [
    {name:"kave" , email:"kave@gmail.com"},
    {name:"javad" , email:"javad@gmail.com"},
    {name:"mmd" , email:"mmd@gmail.com"},
    {name:"mahdi" , email:"mahdi@gmail.com"},
    {name:"reza" , email:"reza@gmail.com"},
    {name:"sajad" , email:"sajad@gmail.com"},
    {name:"hamid" , email:"hamid@gmail.com"},
    {name:"hamed" , email:"hamed@gmail.com"},
    {name:"zara" , email:"zara@gmail.com"},
    {name:"gholam" , email:"gholam@gmail.com"},
] ;

export const USerContext = createContext({
    users: [] ,
    setUsers: () => {} ,
    addUsers: () => {} ,
    removeUser: () => {} ,
    hasPermission: [] ,
    setHasPermission: () => {} ,
})

const UsersContextComponent = ({children}) => {

    const [hasPermission, setHasPermission] = useState(true)
    const [users, setUsers] = useState(initialUsers)
    const addUsers = (userAdd) => {
        setUsers([...users, userAdd])
    }
    const removeUser = (name) => {
        setUsers(users.filter(user => user.name !== name))
    }

    return (
        <USerContext.Provider value={{users, setUsers, addUsers, removeUser, hasPermission, setHasPermission}}>
            {children}
        </USerContext.Provider>
    )
     
}

export default UsersContextComponent ;