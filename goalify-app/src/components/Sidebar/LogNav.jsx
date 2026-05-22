import { NavLink } from "react-router-dom";
import { LogOut, LogIn } from "lucide-react";
import {sidebarLinkStyle} from "./sidebarData"


export default function LogNav() {
  let logging = true;

  return (
    <NavLink to="/login" className={`${sidebarLinkStyle} text-gray-600 hover:bg-blue-200`}>
      {logging ? <LogOut size={22} /> : <LogIn size={22} />}

      <h3 className="pb-1 ">
        {logging ? "Log Out" : "Log In"}
      </h3>
    </NavLink>
  );
}
