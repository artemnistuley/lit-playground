import { LitElement } from "lit";

const LoggingMixin = (superClass) => class extends superClass {
  constructor() {
    super();
    console.log(`${this.localName} was created`);
  }

  connectedCallback() {
    super.connectedCallback();
    console.log(`${this.localName} was connected`);
  }

  updated(changedProps) {
    super.updated?.(changedProps);
    console.log(`${this.localName} was updated`);
  }
};

export default LoggingMixin;
