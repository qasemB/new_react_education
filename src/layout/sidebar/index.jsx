import Darkmode from "../../components/Darkmode";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="fixed right-0 h-screen w-64 shadow-lg flex flex-col justify-between">
      {/* topp content */}
      <div className="flex justify-between items-center h-16 p-2 bg-blue-300 dark:bg-gray-900">
        <div>
          <h1 className="">پنل مدیریت</h1>
        </div>
        <div>
          <Darkmode />
        </div>
      </div>
      {/* bottom content */}
      <div className="flex flex-col gap-4 flex-1 p-4 bg-blue-200 dark:bg-gray-900 rounded-b-lg">
        <ul className="">
          <SidebarItem to="/users">کاربران</SidebarItem>
          <SidebarItem to="/posts">پست ها</SidebarItem>
          <SidebarItem to="/comments">کامنت ها</SidebarItem>
          <SidebarItem to="/tasks">تسک ها</SidebarItem>
          <SidebarItem to="/gallery">گالری</SidebarItem>
        </ul>
      </div>
    </div>
  );
}
