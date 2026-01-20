export const Project_Card = ({
  project,
  grid_container_element,
  cover_src,
  cover_alt,
}) => {
  const card_container_element = document.createElement("div");
  const title = document.createElement("h2");
  title.textContent = project.title;
  card_container_element.appendChild(title);
  const cover = document.createElement("img");
  cover.src = cover_src;
  cover.alt = cover_alt;
  card_container_element.appendChild(cover);
  grid_container_element.appendChild(card_container_element);
};
