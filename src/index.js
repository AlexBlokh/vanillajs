import { html, render } from "lit-html";
import axios from "axios";
import TextButtonSection from "./Template.js";

const tbs = new TextButtonSection();
const clickListener = async (event) => {
  console.log("clicked");
  tbs.name = "clicked!";

  const response = axios.get("https://api.ukrdisk.com/legacy/rims?brand=Kosei");
  const data = response.data();

  console.log(JSON.stringify(data))
};

tbs.callback = clickListener;

render(
  html`
    <div>header</div>
    ${tbs}
  `,
  document.body
);

// <text-button-section name="World"></text-button-section>

// render(MyTemplate(onButtonClick, "World"), document.body);
