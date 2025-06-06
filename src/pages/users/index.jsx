import { useState } from "react";
import { deleteUserService, getUsersService } from "../../services/users";
import { useEffect } from "react";
import { FaEdit, FaTrashAlt, FaUserPlus } from "react-icons/fa";
import UsersTable from "./_components/UsersTable";
import { Link } from "react-router";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  const handleGetUsers = async () => {
    try {
      const data = await getUsersService();
      setUsers(data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  const handleDelete = async (id) => {
    const res = await deleteUserService(id)
    if (res.status === 200) {
      alert('عملیات با موفقیت انجام شد')
      console.log(res)
      setUsers(users.filter(user => user.id !== id))
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">مدیریت کاربران</h1>
        <Link to="/users/add" className="bg-blue-400 text-white px-4 py-2 rounded-md flex items-center gap-2">
          <FaUserPlus />
          <span>افزودن کاربر</span>
        </Link>
      </div>

      <UsersTable users={users} handleDelete={handleDelete} />
    </div>
  );
}
