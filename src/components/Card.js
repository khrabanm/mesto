class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  };

  // добавляем метод _getTemplate
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  };

// добавляем классу метод, который вставит данные в разметку и подготовит карточку к публикации 
  generateCard() {
    this._element = this._getTemplate(); 

    this._elementImage = this._element.querySelector('.element__image');
    this._elementLike = this._element.querySelector('.element__like');
    this._elementDelete = this._element.querySelector('.element__trash');
    this._elementTitle = this._element.querySelector('.element__title');

    this._elementImage.src = this._link;
    this._elementImage.alt = this._link;
    this._elementTitle.textContent = this._name;

    this._setEventListeners();

    return this._element; 
  };

// лайк карточки
  _like() {
    this._elementLike.classList.toggle("element__like_active");
  };

// удаление карточки 
  _delete() {
    this._element.remove();
    this._element = null;
  };

  // метод добавления всех обработчиков в одном месте
  _setEventListeners() {
    this._elementLike.addEventListener("click", () => this._like());
    this._elementDelete.addEventListener("click", () => this._delete());
    this._elementImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
   };
};

export { Card };

