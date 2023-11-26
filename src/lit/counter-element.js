import { LitElement, html } from "lit";

export default class CounterElement extends LitElement {
  static properties = {
    count: {type: Number},
  };

  constructor() {
    super();
    this.count = 0;
  }

  _increment() {
    this.count++;
  }

  render() {
    return html`
      <p><button @click="${this._increment}">Click me!</button></p>
      <p>Count: ${this.count}</p>
    `;
  }
}
