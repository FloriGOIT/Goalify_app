import { getRandomPhrase } from "./helpData";
import NewProjectBtn from "../../components/Sidebar/NewProjectBtn";
import BoxBottomMyProject from "../../components/MyProjectsCom/BoxBottomMyProject";
import ProjectCard from "../../components/MyProjectsCom/ProjectCard";
import { projectsData } from "../../components/MyProjectsCom/ProjectData";

const randomPhrase = getRandomPhrase();

export default function ProjectsPage() {
  return (
    <section className="p-10 pr-20 flex flex-col  min-h-screen border gap-3">
      <div className="flex items-start justify-between ">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">My Projects</h1>
          <p className="mt-2 text-gray-500 font-semibold text-lg">
            {randomPhrase}
          </p>
        </div>
        <NewProjectBtn />
      </div>


{projectsData.length > 0 ? (
  <div className="h-[75vh] overflow-y-auto flex flex-col gap-3">

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
      {projectsData.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          progress={project.progress}
          status={project.status}
          dueDate={project.dueDate}
        />
      ))}
    </div>

  </div>
) : (
  <BoxBottomMyProject />
)}
    </section>
  );
}
