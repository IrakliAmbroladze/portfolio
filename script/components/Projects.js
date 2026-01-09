import { projects_list } from "../constants.js";
import { Project_Card } from "./Project_Card.js";

export function Projects() {
  const projects_list_element = document.getElementById("projects-list");
  projects_list.forEach((project) =>
    Project_Card(project, projects_list_element),
  );
}
