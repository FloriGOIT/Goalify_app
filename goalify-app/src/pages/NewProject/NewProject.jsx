
import NewProjectForm from "../../components/MyProjectsCom/NewProjectForm";

export default function NewProject({setProjects}) {
  return (
    <section>
      <NewProjectForm setProjects={setProjects}/>
    </section>
  );
}