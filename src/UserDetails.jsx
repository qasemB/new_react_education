import { Link } from "react-router";

const UserDetails = () => {
  return (
    <div className="fixed w-full h-screen left-0 top-0 z-20 bg-black/50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center overflow-hidden mr-4">
            <span className="text-white text-3xl font-bold">QB</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">قاسم بساکی</h2>
            <p className="text-gray-600">توسعه دهنده فرانت اند</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            اطلاعات شخصی
          </h3>
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center">
              <span className="w-24 text-gray-600">نام:</span>
              <span className="font-medium">قاسم</span>
            </div>
            <div className="flex items-center">
              <span className="w-24 text-gray-600">نام خانوادگی:</span>
              <span className="font-medium">بساکی</span>
            </div>
            <div className="flex items-center">
              <span className="w-24 text-gray-600">ایمیل:</span>
              <span className="font-medium">qasem.basski@example.com</span>
            </div>
            <div className="flex items-center">
              <span className="w-24 text-gray-600">تلفن:</span>
              <span className="font-medium">09121111111</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-4 pt-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">مهارت‌ها</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
              React
            </span>
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
              JavaScript
            </span>
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
              HTML
            </span>
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
              CSS
            </span>
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
              Tailwind
            </span>
          </div>
        </div>
      <div className="flex justify-end px-2 mt-10">
        <Link
          to={"/users"}
          className="bg-gray-500 text-white rounded py-1 px-2 !no-underline"
        >
          بازگشت
        </Link>
      </div>
      </div>
    </div>
  );
};

export default UserDetails;
