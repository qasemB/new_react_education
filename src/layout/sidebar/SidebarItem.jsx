import { NavLink } from "react-router";

const SidebarItem = ({ to, children }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `block hover:bg-blue-100 p-2 rounded w-full h-full ${
            isActive ? "bg-blue-300" : ""
          }`
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default SidebarItem;
