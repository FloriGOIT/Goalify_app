import { buttonBlueStyle } from "./sidebarData";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

export default function NewProjectBtn() {
  return (
    <Link to="/new" className={buttonBlueStyle}>
      <Plus />
      <h4 className="pl-3">New project</h4>
    </Link>
  );
}
