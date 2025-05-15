import UsersList from "./UsersList";

const App = () => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h1 className="text-2xl font-bold text-gray-800">سامانه مدیریت کاربران</h1>
            <UsersList />
        </div>
    );
};

export default App;