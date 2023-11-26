import { LitElement, html } from "lit";

export class MyDispatcher extends LitElement {
  static properties = {
    label: {},
    message: {},
  };

  defaultMessage = '🙂'
  _resetMessage = null;

  constructor() {
    super();
    this.label = 'Check me!';
    this.message = this.defaultMessage;
  }
  
  render() {
    return html`
      <label><input type="checkbox" @click=${this._tryChange}>${this.label}</label>
      <div>${this.message}</div>
    `;
  }

  _tryChange(e) {
    const detail = {message: this.message};
    const event = new CustomEvent('checked', {
      detail,
      bubbles: true,
      composed: true,
      cancelable: true,
    });
    this.dispatchEvent(event);
    if (event.defaultPrevented) {
      e.preventDefault();
    }
    this.message = detail.message;
  }

  updated() {
    clearTimeout(this._resetMessage);
    this._resetMessage = setTimeout(() => {
      this.message = this.defaultMessage;
    }, 1000);
  }
}

export class MyListener extends LitElement {
  static properties = {
    canCheck: {},
  };

  constructor() {
    super();
    this.canCheck = false;
  }

  render() {
    return html`
      <p @checked=${this._checkedHandler}><slot></slot></p>
      <hr>
      <p>${this.canCheck ? 'Allowing' : 'Preventing'} check</p>
      <p><button @click=${this._clickHandler}>Toggle</button></p>
    `;
  }

  _checkedHandler(e) {
    if (!this.canCheck) {
      e.preventDefault();
      e.detail.message = 'Prevented!';
    }
  }

  _clickHandler() {
    this.canCheck = !this.canCheck;
  }
}
