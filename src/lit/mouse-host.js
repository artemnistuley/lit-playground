import { LitElement, html } from "lit";
import MouseController from "./mouse-controller";

export default class MouseHost extends LitElement {
  mouse = new MouseController(this);

  render() {
    return html`
      <h3>The mouse is at:</h3>
      <div>x: ${this.mouse.pos.x} &nbsp; y: ${this.mouse.pos.y}</div>
    `;
  }
}
