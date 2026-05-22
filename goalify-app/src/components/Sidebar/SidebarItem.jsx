import { NavLink } from "react-router-dom";
import {sidebarLinkStyle} from "./sidebarData"


export default function SidebarItem({ info }) {
  const { label, path, icon: Icon } = info;

  return (
    <NavLink
      to={path}
      className={({isActive})=>`${sidebarLinkStyle}
      ${isActive ? "bg-blue-300 font-semibold text-blue-700 shadow-[6px_6px_14px_rgba(59,130,246,0.5)]"
                 : "text-gray-600 hover:bg-blue-200"
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </NavLink>
  );
}
