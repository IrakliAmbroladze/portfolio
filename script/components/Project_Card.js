export const Project_Card = ({
  project,
  grid_container_element,
  cover_src,
  cover_alt,
}) => {
  const card_container_element = document.createElement("div");
  card_container_element.className = "project";

  const cover_container = document.createElement("div");
  const cover = document.createElement("img");
  const project_content_container = document.createElement("div");
  const title = document.createElement("h2");
  const description = document.createElement("p");
  const stack = document.createElement("h3");
  const live_url = document.createElement("a");
  const source_code = document.createElement("a");

  cover_container.className = "cover-container";
  cover.className = "cover";
  project_content_container.className = "project-content-container";

  cover.src = cover_src;
  cover.alt = cover_alt;
  title.textContent = project.title;
  card_container_element.appendChild(title);
  description.textContent = project.paragraph;

  cover_container.appendChild(cover);
  project_content_container.append(
    title,
    description,
    stack,
    live_url,
    source_code,
  );

  card_container_element.append(cover_container, project_content_container);
  grid_container_element.appendChild(card_container_element);
};
