import { LitElement, css, html } from "lit";

export default class ToggleElement extends LitElement {
  static properties = {
    active: {
      type: Boolean,
      reflect: true,

      hasChanged(navVal, oldVal) {
        console.log({ navVal, oldVal });
        return navVal !== oldVal;
      },
    },
  };

  static styles = css`
    :host {
      display: inline-block;
    }
    :host([active]) {
      border: 1px solid red;
    }
  `

  constructor() {
    super();
    this.active = false;
  }

  render() {
    return html`
      <span>Active: ${this.active}</span>
      <button @click="${() => (this.active = !this.active)}">Toggle</button>
    `;
  }
}
