import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form_confirm');
        this._submitButton = this._form.querySelector('.popup__submit-button');
      }
    
      //mothod for Card (function if submit popup confirm
      submitCallback(elem) {
        this._handleSubmit = elem;
      }
    
      //listener for submit form
      setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
          event.preventDefault();
          this._handleSubmit();
        });
      }

      renderLoading(isLoading) {
        if (isLoading) {
            this._submitButton.value = 'Сохранение...'
        } else {
            this._submitButton.value = 'Сохранить'
        }
      }
}