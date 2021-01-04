import { LitElement, css, html } from "lit-element";
import defaultCss from './default-css'

export default class Section1 extends LitElement {
  static get styles() {
    return [defaultCss, css``];
  }

  constructor() {
    super();
  }

  set callback(callback) {
    this._callback = callback;
  }

  set name(name) {
    this._name = name;
    this.render();
  }

  // connectedCallback(){
  // this.render();
  // }

  // static get styles() {
  //   return css`
  //     div { color: red; }
  //   `;
  // }

  render() {
    return html`
      <div>
        <p>Hello ${this._name}</p>
        <button @click=${this._callback}>Click me</button>
        <button @click=${this.cb}>Click me</button>
      </div>
    `;
  }

  cb(event) {
    this._callback(event);
  }
}

window.customElements.define("text-button-section", Section1);
