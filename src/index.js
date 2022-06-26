import "./style.scss";
import printMe from "./print";

const container = document.querySelector(".page_container");

greet();

function greet() {
  container.innerHTML = "hello webpack";
  printMe();
}





