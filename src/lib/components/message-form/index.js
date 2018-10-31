import shadowStyles from './shadow.css';

/*
const stateClasses = {
    withMessage: 'with-message'
};
const template = `
	<style>${shadowStyles.toString()}</style>
	<form>
		<div class="result"></div>
		<form-input name="message_text" placeholder="Введите сообщение" slot="message-input">
			<span slot="icon"></span>
		</form-input>
	</form>
`;
*/

const template = `
	<style>${shadowStyles.toString()}</style>
	<form>
		<div class="result"></div>
		<form-input name="message_text" placeholder="Введите сообщение" slot="message-input">
			<div slot="before">
			</div>
			<div slot="after">
				<file-input></file-input>
				<button type="submit">-></button>
			</div>
		</form-input>
		<geo-input name="message-pos"></geo-input>
	</form>
`;

class MessageForm extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = template;
    this._initElements();
    this._addHandlers();
  }

  static get observedAttributes() {
    return [
      'action',
      'method',
    ];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this._elements.form[attrName] = newVal;
  }

  _initElements() {
    const form = this.shadowRoot.querySelector('form');
    const message = this.shadowRoot.querySelector('.result');
    this._elements = {
      form,
      message,
    };
  }

  _addHandlers() {
    this._elements.form.addEventListener('submit', this._onSubmit.bind(this));
    this._elements.form.addEventListener('keypress', this._onKeyPress.bind(this));
    // this._elements.inputSlot.addEventListener('slotchange', this._onSlotChange.bind(this));
  }

  _onSubmit(event) {
    this._elements.message.innerText = Array.from(this._elements.form.elements).map(
      el => el.value,
    ).join(', ');
    event.preventDefault();
    return false;
  }

  _onKeyPress(event) {
    if (event.keyCode == 13) {
      this._elements.form.dispatchEvent(new Event('submit'));
    }
  }
    _onInput () {
        if (this._elements.message.value.length > 0) {
            this._elements.form.classList.add(stateClasses.withMessage);
        } else {
            this._elements.form.classList.remove(stateClasses.withMessage);
        }
    }
}

function serializeForm () {

}

customElements.define('message-form', MessageForm);

export default MessageForm;