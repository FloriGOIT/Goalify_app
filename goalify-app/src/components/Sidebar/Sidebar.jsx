
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import { sidebarData} from "./sidebarData";
import NewProjectBtn from "./NewProjectBtn";

import LogNav from "./LogNav";


export default function Sidebar() {
  return (
    <aside className="flex flex-col w-64 h-screen pt-10 pl-5 bg-blue-100 border-r-8 border-blue-200">
      <SidebarLogo />

      <nav className="flex flex-col gap-4 ">
        {sidebarData.map( natvigationitem=>(<SidebarItem key={natvigationitem.label} info={natvigationitem}/>))}
      </nav>

      <button className="mt-10">
        <NewProjectBtn/>
      </button>
      <footer className="mt-auto pb-10">
        <LogNav/>
      </footer>

    </aside>
  );
}



