import Users from "./Users";
import Posts from "./Posts";
import { /*Link,*/ NavLink, Route, Routes } from "react-router";
import AddUser from "./AddUser";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded shadow-md overflow-hidden">
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md p-4">
          <div className="flex justify-center items-center gap-4">
            <h1 className="text-2xl font-bold text-indigo-800">
              React App
            </h1>
            <div className="flex gap-4">
              <NavLink
                to="/users"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "indigo.600" : "gray.100",
                  color: isActive ? "white" : "",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.25rem",
                })}
                className={({ isActive }) => `p-2 rounded !no-underline ${isActive
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"}` }
              >
                کاربران
              </NavLink>
              <NavLink
                to="/posts"
                className={({ isActive }) => `p-2 rounded !no-underline ${isActive
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"}` }
              >
                پست‌ها
              </NavLink>
            </div>
          </div>
        </header>

        <div className="p-6 mt-20">
          <Routes>
            <Route path="/users" element={<Users />} >
              <Route path="add-user" element={<AddUser />} />
            </Route>
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
