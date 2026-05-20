import {NotebookPen} from "lucide-react"
import { Link } from "react-router-dom"
const sidebarLinkStyle =
  "flex items-center gap-3 py-1 rounded-xl w-40 transition duration-300 hover:bg-blue-200 hover:text-gray-600 hover:shadow-[6px_6px_14px_rgba(59,130,246,0.5)]";


export default function NotesHome() {
  return (
    <Link to="/notes" className={sidebarLinkStyle}>
        <NotebookPen size={22} c/>
        <h3 className="pb-1">Notes</h3>
    </Link>
  )
}