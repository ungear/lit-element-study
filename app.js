import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class MyElement extends LitElement {
  static get properties(){
    return {
      testValue: { type: String },
    }
  }
  constructor(){
    super();
    this.testValue = "sample text"
  }
  render(){
    return html`
      <p>A paragraph</p>
      <p>${this.testValue}</p>
      <button @click="${this.onButtonCLick}">Update</button>
    `;
  }
  onButtonCLick(){
    this.testValue += " updated";
  }
}
// Register the new element with the browser.
customElements.define('my-element', MyElement);