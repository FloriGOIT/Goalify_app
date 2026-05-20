import SidebarLogo from "./SidebarLogo";
import MyProjects from "../MyProjects";
import NotesHome from "../NotesHome";
import Profile from "./Profile";
import Calendar from "./Calendar";
import Settings from "./Settings";
import NewProject from "./NewProject/NewProject";
import Login from "../../pages/Login";

export default function Sidebar() {
  return (
    <aside className="flex flex-col w-64 h-screen  p-4">
      <SidebarLogo />
      <div className="flex flex-col font-semibold text-gray-500 gap-4">
        <MyProjects />
        <NotesHome />
        <Calendar />
        <Profile />
        <Settings />
      </div>
      <NewProject />
      <footer className="mt-auto pb-6">
        <Login />
      </footer>
    </aside>
  );
}
