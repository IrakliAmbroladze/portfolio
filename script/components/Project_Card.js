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
  const label = document.createElement("label");
  const ul = document.createElement("ul");
  const live_url = document.createElement("a");
  const source_code = document.createElement("a");
  const links_container = document.createElement("div");
  const chain_icon = document.createElement("img");
  const github_icon = document.createElement("img");
  const live_url_span = document.createElement("span");
  const source_code_span = document.createElement("span");

  cover_container.className = "cover-container";
  cover.className = "cover";
  project_content_container.className = "project-content-container";
  links_container.className = "links-container";
  live_url.className = "project-link";
  source_code.className = "project-link";
  chain_icon.className = "project-link-icon";
  github_icon.className = "project-link-icon";

  cover.src = cover_src;
  cover.alt = cover_alt;
  title.textContent = project.title;
  card_container_element.appendChild(title);
  description.textContent = project.paragraph;
  label.textContent = "Tech stack:";
  chain_icon.src = "/images/icons/chain.svg";
  chain_icon.alt = "chain";
  github_icon.src = "/images/icons/github.svg";
  github_icon.alt = "github";

  live_url.href = project.live_url || "#";
  live_url.target = "_blank";
  source_code.href = project.source_code || "#";
  source_code.target = "_blank";

  live_url_span.textContent = "Live Preview";
  source_code_span.textContent = "View Code";
  stack.append(label, ul);
  live_url.append(chain_icon, live_url_span);
  source_code.append(github_icon, source_code_span);
  links_container.append(live_url, source_code);
  project.stack.forEach((element, index, array) => {
    const li = document.createElement("li");
    if (index !== array.length - 1) {
      li.innerHTML = `${element},&nbsp;`;
    } else {
      li.textContent = element;
    }
    ul.appendChild(li);
  });

  cover_container.appendChild(cover);
  project_content_container.append(title, description, stack, links_container);

  card_container_element.append(cover_container, project_content_container);
  grid_container_element.appendChild(card_container_element);
};
