import { LogOut, LogIn } from "lucide-react";
import {Link} from "react-router-dom"
const sidebarLinkStyle =
  "flex items-center gap-3 py-1 rounded-xl w-40 font-semibold text-gray-500 transition duration-300 hover:bg-blue-200 hover:shadow-[6px_6px_14px_rgba(59,130,246,0.5)]";

export default function Profile() {
  let logging = true;

  return (
    <Link to="/" className={sidebarLinkStyle}>
      {logging ? <LogOut size={22} /> : <LogIn size={22} />}

      <h3 className="pb-1">
        {logging ? "Log Out" : "Log In"}
      </h3>
    </Link>
  );
}