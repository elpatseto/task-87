import "../scss/app.scss";
import * as R from "/node_modules/ramda";
import {forEach} from "ramda";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const arrayToPluck = [
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ];
  const articles = document.querySelectorAll("article");
  let x = R.pluck("class");

  for (let i = 0; i < articles.length; i++) {
    articles[i].classList.add(x(arrayToPluck)[i]);
  }

});
