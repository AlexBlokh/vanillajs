import { html, render } from "lit-html";

export default class TextButtonSection extends HTMLElement {
  constructor(callback) {
    super();
    this._root = this.attachShadow({ mode: "open" });
  }

  set callback(callback) {
    this._callback = callback;
  }

  set name(name){
    this._name = name
    this._update()
  }

  connectedCallback(){
    this._update();
  }

  template() {
    return html`
      <p>Hello ${this._name}</p>
      <button @click=${this._callback}>Click me</button>
      <button @click=${this.cb}>Click me</button>
    `;
  }

  _update() {
    render(this.template(), this._root, { eventContext: this });
  }

  cb(event) {
    this._callback(event)
  }
}

window.customElements.define("text-button-section", TextButtonSection);
