import { projects_list as data } from "./constants.js";
function render_projects() {
  const projects_list = document.getElementById("projects-list");
  const project_card = document.createElement("div");
  project_card.textContent = "project card";
  projects_list.appendChild(project_card);
  console.log(data);
}

render_projects();
