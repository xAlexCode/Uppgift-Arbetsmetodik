import "./style.scss";
import { createHtml } from "./src/ts/createHtml";
import { toggleTheme } from "./src/ts/toggleTheme";

function init() {
  toggleTheme();
  createHtml();
}

init();
