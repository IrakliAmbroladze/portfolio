import { Section } from "../classes/Section.js";
import { articles_list, PROJECTS_COVERS_DIRECTORY } from "../constants.js";
import { Project_Card } from "./Project_Card.js";

export function Articles() {
  const section = document.getElementById("articles");
  const articles = new Section("Articles", "Articles I have written so far");
  section.classList.add("container", "section", "projects");

  const title = document.createElement("h2");
  title.className = "section-title";
  title.innerHTML = articles.title;
  const subheader = document.createElement("h2");
  subheader.className = "section-paragraph";
  subheader.innerHTML = articles.subheader;

  const articlesList = document.createElement("div");
  articlesList.className = "projects-list";
  section.append(title, subheader, articlesList);

  articles_list.forEach((project) =>
    Project_Card({
      project,
      grid_container_element: articlesList,
      cover_src: `${PROJECTS_COVERS_DIRECTORY}/${project.image}`,
      cover_alt: project.image,
    }),
  );
}
