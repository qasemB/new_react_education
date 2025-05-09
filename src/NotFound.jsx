import { Link } from "react-router";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
            <div className="max-w-lg w-full text-center">
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-indigo-600">404</h1>
                    <div className="h-1.5 w-24 bg-indigo-600 mx-auto my-5 rounded-full"></div>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-3">صفحه مورد نظر یافت نشد!</h2>
                <p className="text-gray-600 mb-8">متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا حذف شده است.</p>
                
                <div className="relative mb-10">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-gradient-to-br from-blue-50 to-indigo-100 px-4 text-sm text-gray-500">یا</span>
                    </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                        to="/" 
                        className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300 !no-underline"
                    >
                        بازگشت به خانه
                    </Link>
                    <Link 
                        to="/users" 
                        className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-300 !no-underline border border-indigo-200"
                    >
                        مشاهده کاربران
                    </Link>
                </div>
                
                <div className="mt-12 text-gray-500">
                    <svg className="w-20 h-20 mx-auto opacity-20" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default NotFound;