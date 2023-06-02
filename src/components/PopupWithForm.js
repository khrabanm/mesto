import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({ submitForm }, popup) {
        super(popup);
        this._submitForm = submitForm;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._popupInputList = this._popupForm.querySelectorAll('.popup__input');
        this._submitButton = this._popupForm.querySelector('.popup__submit-button');
        this._submitButtonText = this._submitButton.textContent;
      }

      getInputValues() {
        this._inputValues = {};
        this._popupInputList.forEach((input) => {
          this._inputValues[input.name] = input.value;
        });
        return this._inputValues;
      }
    
      setEventListeners() {
        this._popupForm.addEventListener('submit', () => {
          this._submitForm(this.getInputValues());
        });
        super.setEventListeners();
      }
    
      close() {
        super.close();
        this._popupForm.reset();
      }
    
      renderLoading(isLoading) {
        if (isLoading) {
            this._submitButton.value = 'Сохранение...'
        } else {
            this._submitButton.value = 'Сохранить'
        }
      }
}
