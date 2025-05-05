import { useGetData } from "./getchData";

const Posts = () => {
  const {data, loading, error} = useGetData("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <div className="flex justify-center items-center min-h-[200px]"><span className="text-blue-600 text-lg font-medium">در حال دریافت اطلاعات...</span></div>;
  if (error) return <div className="bg-red-50 text-red-600 p-4 rounded text-center">خطا: {error}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">پست‌های اخیر</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {data.map((post) => (
          <div key={post.id} className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 h-3"></div>
            <div className="p-5">
              <h3 className="font-bold text-lg text-gray-800 mb-3 line-clamp-1">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.body}</p>
              <div className="flex justify-between items-center">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">پست #{post.id}</span>
                <button className="text-sm text-white bg-gradient-to-r from-orange-500 to-pink-500 px-3 py-1 rounded hover:opacity-90 transition">
                  ادامه مطلب
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;

