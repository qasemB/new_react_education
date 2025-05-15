import UsersList from "./UsersList";

const App = () => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow pb-20">
            <h1 className="text-2xl font-bold text-gray-800">سامانه مدیریت کاربران</h1>
            <UsersList />
            <div className="fixed bottom-0 left-0 right-0  p-4 shadow-lg bg-blue-300">
                <h1>فوتر</h1>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus non mollitia unde ipsa minus ipsum reprehenderit, iusto temporibus accusantium numquam officiis amet facere neque rerum, molestiae dolorum pariatur sed corrupti!
            </div>
        </div>
    );
};

export default App;