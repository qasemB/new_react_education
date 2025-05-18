import { NavLink } from "react-router";

const SidebarItem = ({ to, children }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `block hover:bg-blue-100 dark:hover:bg-gray-700 p-2 rounded w-full h-full ${
            isActive ? "bg-blue-300 dark:bg-gray-800" : ""
          }`
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default SidebarItem;
