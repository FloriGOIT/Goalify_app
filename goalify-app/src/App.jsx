import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import MainLayout from "./layouts/MainLayout";
import MyProjects from "./pages/MyProjects/MyProjects";
import ProjectDetails from "./pages/MyProjects/ProjectDetails/ProjectDetails";
import NewProject from "./pages/NewProject/NewProject";
import Notes from "./pages/Notes";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Calendar from "./pages/Calendar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
  
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<MyProjects />} />
          <Route path="projects/new" element={<NewProject />} />
          <Route path="projects/:projectName" element={<ProjectDetails />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="notes" element={<Notes />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//          <Route path="projects/newProject" element={<NewProject />} />