import { LitElement, css, html } from "lit-element";

export default class Layout extends LitElement {
  static get styles() {
    return css`
      div {
        color: red;
        background: #ccc;
        overflow: scroll;
      }
    `;
  }

  static get properties() {
    return {
      content: { type: Array },
    };
  }

  constructor() {
    super();

    this.content = [];
  }

  render() {
    if (!this.content || this.content.length === 0) {
      return html`
        <div>
          <p>Loading...</p>
        </div>
      `;
    }

    return html`
      <div>
        <p>Hello</p>
        ${this.content.map((item) => html`<p>${item.id}</p>`)}
      </div>
      <div></div>
    `;
  }
}

window.customElements.define("subpath-content", Layout);
