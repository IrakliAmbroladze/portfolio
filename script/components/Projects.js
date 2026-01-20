import { projects_list, PROJECTS_COVERS_DIRECTORY } from "../constants.js";
import { Project_Card } from "./Project_Card.js";

export function Projects() {
  const projects_list_element = document.getElementById("projects-list");
  projects_list.forEach((project) =>
    Project_Card({
      project,
      grid_container_element: projects_list_element,
      cover_src: `${PROJECTS_COVERS_DIRECTORY}/${project.image}`,
      cover_alt: project.image,
    }),
  );
}
