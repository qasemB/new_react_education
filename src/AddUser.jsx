import {  useNavigate } from "react-router";

const AddUser = () => {
    const navigate = useNavigate()
    return (
        <div className="fixed w-full h-screen left-0 top-0 z-20 bg-black/50 flex justify-center items-center">
            <div className="bg-white w-1/3 py-5 rounded-2xl shadow">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">افزودن کاربر</h2>
                <form className="p-4 rounded-lg shadow-md mb-4">
                    <div className="flex flex-col">
                    <label htmlFor="name" className="mb-2 font-medium text-gray-800">نام کاربر</label>
                    <input type="text" id="name" name="name" className="p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="flex flex-col mt-4">
                    <label htmlFor="email" className="mb-2 font-medium text-gray-800">ایمیل کاربر</label>
                    <input type="email" id="email" name="email" className="p-2 border border-gray-300 rounded" />
                    </div>
                    <button type="submit" className="mt-4 bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-150">افزودن کاربر</button>
                </form>
                <div className="flex justify-end px-10">
                    <button onClick={()=>navigate(-1)} className="bg-gray-500 text-white rounded py-1 px-2 !no-underline">
                        بازگشت
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddUser;