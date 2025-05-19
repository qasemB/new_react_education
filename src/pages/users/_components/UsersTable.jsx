import { FaEdit, FaTrashAlt } from "react-icons/fa";

const UsersTable = ({ users }) => {
  return (
    <div className="flex justify-center items-center rounded-2xl overflow-hidden">
      <table className="table-auto w-full text-center">
        <thead className="bg-blue-400 dark:bg-blue-900">
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">نام</th>
            <th className="px-4 py-2">ایمیل</th>
            <th className="px-4 py-2">شماره تلفن</th>
            <th className="px-4 py-2">وبسایت</th>
            <th className="px-4 py-2">عملیات</th>
          </tr>
        </thead>
        <tbody className="bg-gray-200 dark:bg-gray-800">
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="px-4 py-2">{user.id}</td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.phone}</td>
              <td className="px-4 py-2">{user.website}</td>
              <td className="px-4 py-2 flex gap-4 items-center">
                <button className="text-blue-500">
                  <FaEdit />
                </button>
                <button className="text-red-500">
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
