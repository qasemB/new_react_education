import { useContext } from "react"
import { UserContext } from "./UserContext"

export const permissionHOC = (WrappedComponent) => {

    const NewComponent = (props) => {
        console.log(props);
        
        const {hasPermission} = useContext(UserContext)
        return hasPermission ? <WrappedComponent {...props} /> : null
    }

    return NewComponent

}
