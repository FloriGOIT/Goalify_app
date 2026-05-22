import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { projectName } = useParams();

  return <h1>{projectName}</h1>;
}

export default ProjectDetails