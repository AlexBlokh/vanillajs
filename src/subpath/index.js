import { render } from "lit-html";
import { html, css } from "lit-element";
import axios from "axios";
import Layout from "./layout.js";
import "../index.css";

// init screen

const style = css`
  .container {
  }
`;

const content = new Layout();

async function load() {
  const result = await (
    await axios.get("https://api.ukrdisk.com/legacy/rims?brand=Kosei")
  ).data;
  content.content = result;
}

load();

render(
  html`
    <style>
      ${style}
    </style>
    <div class="container">${content}</div>
  `,
  document.body
);
