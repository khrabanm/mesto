const page = document.querySelector('.page');
const content = page.querySelector('.content');
const profile = content.querySelector('.profile');
const addButton = profile.querySelector('.profile__add-button');
const profileInfo = profile.querySelector('.profile__info');
const editButton = profileInfo.querySelector('.profile__edit-button');
const popupProfile = page.querySelector('.profile-popup');
const popupPhoto = page.querySelector('.popup_photo');
const popupContainer = popupProfile.querySelector('.profile-popup__container');
const popupContainerPhoto = popupPhoto.querySelector('.popup__container_photo');
const formElement = popupContainer.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');
const profileName = profileInfo.querySelector('.profile__name');
const profileDescription = profile.querySelector('.profile__description');
const cardTemplate = document.querySelector('.card-template').content;
const popupImage = document.querySelector('.popup_image');
const popupContainerImage = popupImage.querySelector('.popup__container_image');
const closeButtonImage = popupContainerImage.querySelector('.popup__close-icon_image');
const popupImageOpen = popupContainerImage.querySelector('.popup__image');
const popupHeading = popupContainerImage.querySelector('.popup__heading');
const closeButtons = document.querySelectorAll('.popup__close-icon');
const elements = content.querySelector('.elements');
const cards = elements.querySelector('.card');



function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
};

editButton.addEventListener('click', function () {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}); 

addButton.addEventListener('click', function () {
  openPopup(popupPhoto);
}); 

function closePopup (popupElement) {
  popupElement.classList.remove('popup_opened');
}

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

function handleFormSubmit (evt) {
  evt.preventDefault(); 

  nameInput.getAttribute('value');
  jobInput.getAttribute('value');

  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;

  closePopup(popupProfile);
}

formElement.addEventListener('submit', handleFormSubmit);



const initialCards = [
  {
    name: '??????????',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: '?????????????????????? ??????????????',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: '??????????????',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: '????????????????',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: '???????????????????????? ??????????',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: '????????????',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const createCard = (data) => {
  // ?????????????????? ????????????, ?????????????????? ?????? ?????????????????????? ???? ?????????????? data, ???????????????????? ???????????? ?????????????????????? ??????????????, ?? ?????????????? ?????????? ???????? ????????
  const newCard = cardTemplate.querySelector('.element').cloneNode(true);
  const cardTitle = newCard.querySelector('.element__title');
  const cardImage = newCard.querySelector('.element__image');
  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  const cardLike = newCard.querySelector('.element__like');
  cardLike.addEventListener("click", (evt) => {
  evt.target.classList.toggle("element__like_active");
  });

  const cardTrash = newCard.querySelector('.element__trash');
  cardTrash.addEventListener("click", (evt) => {
  evt.target.closest('.element').remove();
  });

  cardImage.addEventListener('click', (evt) => {
    popupImageOpen.src = evt.target.src;
    popupImageOpen.alt = evt.target.alt;
    popupHeading.textContent = evt.target.closest('.element').querySelector('.element__title').textContent;

    openPopup(popupImage); 
  }); 
  // ???????????????????? ???????????????????????? ????????????????
  return newCard;
};

const renderCard = (data, cardsContainer) => {
  // ?????????????? ???????????????? ???? ???????????? ????????????
  const cardElement = createCard(data);
  // ???????????????? ???? ?? ?????????????????? ????????????????
  cardsContainer.prepend(cardElement);
};

const formElementPhoto = popupContainerPhoto.querySelector('.popup__form_photo');
const cardNameInput = formElementPhoto.querySelector('.popup__input_type_place');
const cardLinkInput = formElementPhoto.querySelector('.popup__input_type_url');

formElementPhoto.addEventListener('submit', (evt) => {
  evt.preventDefault();
  renderCard({name: cardNameInput.value, link: cardLinkInput.value}, elements);
  closePopup(popupPhoto);
  evt.target.reset();
});  

initialCards.forEach(card => { renderCard(card, elements); });
