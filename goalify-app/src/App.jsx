import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import MainLayout from "./layouts/MainLayout";
import MyProjects from "./pages/MyProjects/MyProjects";
import NewProject from "./pages/NewProject/NewProject";
import ProjectDetails from "./pages/MyProjects/ProjectDetails/ProjectDetails";
import Notes from "./pages/Notes";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Calendar from "./pages/Calendar";
import { useState, useEffect } from "react";


function App() {
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem("projects");
    return savedProjects ? JSON.parse(savedProjects) : [];
  });

  useEffect(() => {localStorage.setItem("projects", JSON.stringify(projects))}, [projects]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="projects">
            <Route index element={<MyProjects projects={projects} setProjects={setProjects}/>} />
            <Route
              path="new"
              element={
                <NewProject projects={projects} setProjects={setProjects} />
              }
            />
            <Route path=":projectName" element={<ProjectDetails />} />
          </Route>

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

