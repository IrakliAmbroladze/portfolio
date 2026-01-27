import { Section } from "../classes/Section.js";

export function Articles() {
  const section = document.getElementById("articles");
  const articles = new Section("Articles", "Articles I have written so far");
  console.log(articles);
  console.log(section);
}
