function MainLayout() {
  return (
    <div className="flex">
      <aside className="w-70 bg-blue-500 h-screen p-4"> 
        Sidebar
      </aside>

      <main className="flex-1 p-4">
        Main Content
      </main>
    </div>
  );
}

export default MainLayout;

//<aside className="w-[280px] bg-blue-500 h-screen"> 