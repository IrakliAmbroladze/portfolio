export const Project_Card = ({
  project,
  grid_container_element,
  cover_src,
  cover_alt,
}) => {
  const card_container_element = document.createElement("div");
  card_container_element.className = "project";

  const cover = document.createElement("img");
  const title = document.createElement("h2");
  const description = document.createElement("p");
  const stack = document.createElement("h3");
  const live_url = document.createElement("a");
  const source_code = document.createElement("a");

  title.textContent = project.title;
  card_container_element.appendChild(title);
  cover.src = cover_src;
  cover.alt = cover_alt;
  card_container_element.append(
    cover,
    title,
    description,
    stack,
    live_url,
    source_code,
  );
  grid_container_element.appendChild(card_container_element);
};
