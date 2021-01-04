import { render } from "lit-html";
import { html, css } from "lit-element";
import axios from "axios";
import Section1 from "./Section1.js";
import "./index.css";

const tbs = new Section1();
const clickListener = async (event) => {
  console.log("clicked");
  tbs.name = "clicked!";

  axios.get("https://api.ukrdisk.com/legacy/rims?brand=Kosei").then((data) => {
    console.log(JSON.stringify(data));
  });
};

tbs.callback = clickListener;

const style = css`
  .container {
    background: #ccc;
    width: 400px;
  }
`;

render(
  html`
    <style>
      ${style}
    </style>
    <div class="container">
      ${tbs}
    </div>
  `,
  document.body
);

// class Page {}
// class PageBlue extends Page {}
// class PageGreen extends LoggingPage(Page) {}

// const green = new PageGreen()
// green.log();

// const LoggingPage = (superclass) => class LoggingPage extends superclass {
//   log(){
//     console.log("logged")
//   }
// };

// <text-button-section name="World"></text-button-section>

// render(MyTemplate(onButtonClick, "World"), document.body);
