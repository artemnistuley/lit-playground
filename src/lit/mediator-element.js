import { LitElement, html, css } from "lit";

export default class MediatorElement extends LitElement {
  static properties = {
    name: {},
    _submitEnabled: {state: true},
  };

  static styles = css`
    :host: {
      font-family: sans-serif;
    }
  `;

  constructor() {
    super();
    this.name = 'anon';
    this._submitEnabled = false;
  }

  get input() {
    return this.renderRoot?.querySelector('input') ?? null;
  }

  _inputChanged(event) {
    this._submitEnabled = !!event.target.value;
  }

  _updateName() {
    this.name = this.input.value;
    this.input.value = '';
    this._submitEnabled = false;
  }

  render() {
    return html`
      <p>Nickname: ${this.name}</p>
      <label>Enter new nickname:
        <input @input=${this._inputChanged}>
      </label>
      <button @click=${this._updateName} .disabled=${!this._submitEnabled}>Submit</button>
    `;
  }
}
