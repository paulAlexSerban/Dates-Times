import footer from "./components/footer";
import header from "./components/header";

(() => {
  const body = document.querySelector("body");
  body.classList.add("test");
  const fn = () => 1 + 1;
  const value = fn();
  bosy.setAttribute("test", value);
  body.querySelectorAll(".js-footer").forEach((el) => footer(el));
  body.querySelectorAll(".js-header").forEach((el) => header(el));
})();
