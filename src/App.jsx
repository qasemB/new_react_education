import Users from "./Users";
import Posts from "./Posts";
import { BrowserRouter, Route, Routes } from "react-router";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6">
            React App
          </h1>

          <div className="flex justify-center mb-8 gap-4">
            <button
              className={`px-6 py-3 rounded font-medium transition-all duration-200`}
            >
              کاربران
            </button>
            <button
              className={`px-6 py-3 rounded font-medium transition-all duration-200`}
            >
              پست‌ها
            </button>
          </div>

          <div className="bg-gray-50 rounded p-4">
            <BrowserRouter>
              <Routes>
                <Route path="/users" element={<Users />} />
                <Route path="/posts" element={<Posts />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
