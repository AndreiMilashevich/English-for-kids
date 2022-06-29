import "./style.scss";
import printMe from "./print";

const container = document.querySelector(".page_container");
const buttons =  [...document.querySelectorAll("button")];

buttons.forEach(item => addEventListener("click", (event) => {
  let pageData = pages.filter(item => event.target.id === item.id);
  window.history.pushState({}, pageData[0].route, window.location.origin + pageData[0].route);
  render(pageData);
  console.log(document.location);
}));

const pages = [
  {id: "main", text: "This is main page", route: "/"},
  {id: "portfolio", text: "This is portfolio page", route: "/portfolio"},
  {id: "about", text: "This is about page", route: "/about"},
];

init();

function render(pageData) {
  container.innerHTML = pageData[0].text;
}

function init() {
  render(pages[0]);
  let pathname = document.location.pathname;
  let pageData = pages.filter(item => pathname === item.route);
  render(pageData);
}




