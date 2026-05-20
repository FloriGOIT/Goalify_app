import Sidebar from "../components/Sidebar/Sidebar.jsx";
import LogUser from "../pages/Login.jsx"

function MainLayout() {
  return (
    <div className="flex h-screen">
      <aside className="w-70 bg-blue-100 p-4 border-r-8 border-blue-200">
        <Sidebar />
      </aside>

      <main className="flex-1 p-4">Main content</main>

    </div>
  );
}

export default MainLayout;


