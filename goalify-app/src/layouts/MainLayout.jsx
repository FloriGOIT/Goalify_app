import Sidebar from "../components/Sidebar/Sidebar.jsx";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 bg-linear-to-br from-slate-100 via-blue-50 to-slate-200">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
