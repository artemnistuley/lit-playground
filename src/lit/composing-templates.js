import { LitElement, css, html } from "lit";

export default class ComposingTemplates extends LitElement {
  static properties = {
    article: {
      attribute: false,
    },
  }

  constructor() {
    super();
    this.article = {
      title: 'My title',
      text: 'Article text',
    };
  }

  headerTemplate() {
    return html`<header>${this.article.title}</header>`;
  }

  articleTemplate() {
    return html`<article>${this.article.text}</article>`;
  }

  footerTemplate() {
    return html`<footer>This is a footer.</footer>`;
  }

  render() {
    return html`
      ${this.headerTemplate()}
      ${this.articleTemplate()}
      ${this.footerTemplate()}
    `;
  }
}
