export const Project_Card = (project, grid_container_element) => {
  const card_container_element = document.createElement("div");
  const title = document.createElement("h2");
  title.textContent = project.title;
  card_container_element.appendChild(title);
  grid_container_element.appendChild(card_container_element);
};
