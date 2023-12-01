import { LitElement, html, css } from "lit";
import { ContextProvider, ContextConsumer, createContext } from "@lit/context";

const contextKey = Symbol('contextKey');
const context = createContext(contextKey);

const providerStyles = css`
  slot {
    display: block;
    border: dashed 4px #dadada;
    padding: 0px 10px;
  }

  :host {
    display: block;
    border: solid 4px #adadad;
    padding: 2px;
  }

  h3 {
    margin-top: 0;
  }
`;

export class ProviderEl extends LitElement {
  static styles = providerStyles;

  static properties = {
    data: {},
  };

  constructor() {
    super();
    this._provider = new ContextProvider(this, { context });
    this.data = 'Initial';
  }

  set data(val) {
    this._data = val;
    this._provider.setValue(val);
  }

  get data() {
    return this._data;
  }

  render() {
    return html`
      <h3>Provider's data: <code>${this.data}</code></h3>
      <slot></slot>
    `;
  }
}

export class ConsumerEl extends LitElement {
  _consumer = new ContextConsumer(this, { context });

  get providedData() {
    return this._consumer.value;
  }

  render() {
    return html`<h3>Consumer data: <code>${this.providedData}</code></h3>`;
  }
}
