import { USerContext } from "../UsersContextComment/UsersContextComment"
import { useContext } from "react"

const permissionHOC = (WrappedComponent) => {

    const NewComponent = (props) => {
        console.log(props);
        
        const {hasPermission} = useContext(USerContext)
        return hasPermission ? <WrappedComponent {...props} /> : null
    }

    return NewComponent
}

export {permissionHOC}