import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({ submitForm }, popup) {
        super(popup);
        this._submitForm = submitForm;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._popupInputList = this._popupForm.querySelectorAll('.popup__input');
        this._submitButton = this._popupForm.querySelector('.popup__submit-button');
      }
    
      setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', this._submitForm)
      }
    
      close() {
        super.close();
        this._popupForm.reset();
      }

      _getInputValues() {
      this._popupInputList.forEach((input) => {
        this._inputValues[input.name] = input.value;
      });
      return this._inputValues;
      }
}
