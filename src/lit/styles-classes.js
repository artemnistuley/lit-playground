import { LitElement, html, css } from "lit";
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

export default class StylesClasses extends LitElement {
  static properties = {
    classes: {},
    styles: {},
  };

  static styles = css`
    .someclass {
      border: 1px solid red;
      padding: 4px;
    }
    anotherclass {
      background-color: navy;
    }
  `;

  constructor() {
    super();
    this.classes = {
      someclass: true,
      anotherclass: true,
    };
    this.styles = {
      color: 'lightgreen',
      fontFamily: 'Roboto',
    };
  }

  render() {
    return html`
      <div class=${classMap(this.classes)} style=${styleMap(this.styles)}>
        Content
      </div>
    `;
  }
};
