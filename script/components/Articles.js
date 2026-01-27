import { Section } from "../classes/Section.js";

export function Articles() {
  const section = document.getElementById("articles");
  const articles = new Section("Articles", "Articles I have written so far");
  section.classList.add("container");
  section.classList.add("section");

  const title = document.createElement("h2");
  title.className = "section-title";
  title.innerHTML = articles.title;
  const subheader = document.createElement("h2");
  subheader.className = "section-paragraph";
  subheader.innerHTML = articles.subheader;
  section.append(title, subheader);
  console.log(articles);
  console.log(section);
}
