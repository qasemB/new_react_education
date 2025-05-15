import { useContext } from "react";
import { UserContext } from "./UserContext";


const PermissionsRP = ({children}) => {
    const {hasPermission} = useContext(UserContext)
    return (
        <div>
            {hasPermission && children("qasem")}
        </div>
    );
};

export default PermissionsRP;