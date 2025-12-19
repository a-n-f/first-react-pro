import { useContext } from "react";
import { USerContext } from "../UsersContextComment/UsersContextComment";

const PermissionRP = ({children}) => {
    const {hasPermission} = useContext(USerContext)
    return (
        <div>
            {hasPermission ? children("javad") : null}
        </div>
    )
}

export default PermissionRP;