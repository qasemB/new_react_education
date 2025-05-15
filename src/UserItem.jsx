import { useContext } from "react";
import { UserContext } from "./UserContext";

const UserItem = ({user}) => {
    const {deleteUser} = useContext(UserContext)
    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg p-4">
            <h1 className="text-lg font-medium text-gray-900">{user.name}</h1>
            <p className="mt-1 text-sm text-gray-500">{user.email}</p>
            <button className="mt-3 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" onClick={() => deleteUser(user.id)}>
                Delete
            </button>
        </div>
    );
};

export default UserItem;
