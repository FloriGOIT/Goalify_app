import {Plus} from "lucide-react"
import { Link } from "react-router-dom"

export default function NewProject() {
  return (
    <Link to="/newProject" className="flex font-semibold text-white mt-10 bg-blue-500 w-40 px-3 py-2 border-gray-500 rounded-lg hover:shadow-[6px_6px_14px_rgba(59,130,246,0.5)]">
   <Plus />
   <h4 className="pl-3">New project</h4>
    </Link>
  )
}