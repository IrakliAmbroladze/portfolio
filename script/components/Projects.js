import { projects_list } from "../constants.js";

export function Projects() {
  const projects_list_element = document.getElementById("projects-list");
  projects_list.map((project) => {
    const project_card = document.createElement("div");
    const card_title = document.createElement("h2");
    card_title.textContent = project.title;
    project_card.appendChild(card_title);
    projects_list_element.appendChild(project_card);
  });
}
