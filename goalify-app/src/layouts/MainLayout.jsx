import Sidebar from "../components/Sidebar/Sidebar.jsx";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
