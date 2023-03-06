let page = document.querySelector('.page');
let content = page.querySelector('.content');
let profile = content.querySelector('.profile');
let addButton = profile.querySelector('.profile__add-button');
let profileInfo = profile.querySelector('.profile__info');
let editButton = profileInfo.querySelector('.profile__edit-button');
let popup = page.querySelector('.popup');
let popupPhoto = page.querySelector('.popup_photo');
let popupContainer = popup.querySelector('.popup__container');
let popupContainerPhoto = popupPhoto.querySelector('.popup__container_photo');
let closeButton = popupContainer.querySelector('.popup__close-icon');
let closeButtonPhoto = popupContainerPhoto.querySelector('.popup__close-icon_photo');
let formElement = popupContainer.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_description');
let profileName = profileInfo.querySelector('.profile__name');
let profileDescription = profile.querySelector('.profile__description');



function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
};

editButton.addEventListener('click', function () {
  openPopup(popup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}); 

addButton.addEventListener('click', function () {
  openPopup(popupPhoto);
}); 

function closePopup (popupElement) {
  popupElement.classList.remove('popup_opened');
}

closeButton.addEventListener('click', function () {
  closePopup(popup);
}); 

closeButtonPhoto.addEventListener('click', function () {
  closePopup(popupPhoto);
}); 

function handleFormSubmit (evt) {
  evt.preventDefault(); 

  nameInput.getAttribute('value');
  jobInput.getAttribute('value');

  profileName;
  profileDescription;

  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;

  closePopup (popup);
}

formElement.addEventListener('submit', handleFormSubmit);



const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

let elements = content.querySelector('.elements');
let cards = elements.querySelector('.card');


const createCard = (data) => {
  // Клонируем шаблон, наполняем его информацией из объекта data, навешиваем всякие обработчики событий, о которых будет инфа ниже
  const cardTemplate = document.querySelector('.card-template').content;
  const newCard = cardTemplate.querySelector('.element').cloneNode(true);

  const cardTitle = newCard.querySelector('.element__title');
  cardTitle.textContent = data.name;

  const cardImage = newCard.querySelector('.element__image');
  cardImage.src = data.link;

  const cardLike = newCard.querySelector('.element__like');
  cardLike.addEventListener("click", (evt) => {
  evt.target.classList.toggle("element__like_active");
  });

  const cardTrash = newCard.querySelector('.element__trash');
  cardTrash.addEventListener("click", (evt) => {
  evt.target.closest('.element').remove();
  });

  let popupImage = document.querySelector('.popup_image');
  let popupContainerImage = popupImage.querySelector('.popup__container_image');
  let closeButtonImage = popupContainerImage.querySelector('.popup__close-icon_image');
  let popupImageOpen = popupContainerImage.querySelector('.popup__image');
  let popupHeading = popupContainerImage.querySelector('.popup__heading');
  cardImage.addEventListener('click', (evt) => {
    popupImageOpen.src = evt.target.src;
    
    popupHeading.textContent = evt.target.closest('.element').querySelector('.element__title').textContent;
    
    openPopup(popupImage);
  }); 

  closeButtonImage.addEventListener('click', function () {
  closePopup(popupImage);
  });
  // Возвращаем получившуюся карточку
  return newCard;
};

const renderCard = (data, cardsContainer) => {
  // Создаем карточку на основе данных
  const cardElement = createCard(data);
  // Помещаем ее в контейнер карточек
  cardsContainer.prepend(cardElement);
};

let formElementPhoto = popupContainerPhoto.querySelector('.popup__form_photo');
let cardNameInput = formElementPhoto.querySelector('.popup__input_type_place');
let cardLinkInput = formElementPhoto.querySelector('.popup__input_type_url');

formElementPhoto.addEventListener('submit', (evt) => {
  evt.preventDefault();
  renderCard({name: cardNameInput.value, link: cardLinkInput.value}, elements);
  closePopup(popupPhoto);
});  

initialCards.forEach(card => { renderCard(card, elements); });
