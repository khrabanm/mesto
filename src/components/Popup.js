export default class Popup {
    constructor(popup) {
        this._popup = document.querySelector(popup);
        this._handleEscClose = this._handleEscClose.bind(this);
      }
    
      open () {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
      };

      close () {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
      }

      _handleEscClose = (evt) => { // логика закрытия попапа клавишей Esc
        if (evt.key === "Escape") {
            this.close();
          };
      }

      setEventListeners() {
        this._popup.addEventListener("mousedown", (evt) => {
        if (evt.currentTarget === evt.target) {
            this.close();
        } else if (evt.target.classList.contains("popup__close-icon")) {
            this.close();
          }
        });
      };
  }