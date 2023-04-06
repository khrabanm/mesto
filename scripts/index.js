import { Card } from './Cards.js';
import { FormValidator } from './Validation.js';
import { validationConfig } from './Validation.js';

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
const formEditProfile = popupContainer.querySelector('.popup__form_profile');
const formPhoto = popupContainerPhoto.querySelector('.popup__form_photo');
const nameInput = formEditProfile.querySelector('.popup__input_type_name');
const jobInput = formEditProfile.querySelector('.popup__input_type_description');
const profileName = profileInfo.querySelector('.profile__name');
const profileDescription = profile.querySelector('.profile__description');
const popupImage = document.querySelector('.popup_image');
const popupContainerImage = popupImage.querySelector('.popup__container_image');
const popupImageOpen = popupContainerImage.querySelector('.popup__image');
const popupHeading = popupContainerImage.querySelector('.popup__heading');
const closeButtons = document.querySelectorAll('.popup__close-icon');
const elements = content.querySelector('.elements');
const popupPlace = page.querySelector('.popup__input_type_place');
const popupLink = page.querySelector('.popup__input_type_url');
const cardNameInput = formPhoto.querySelector('.popup__input_type_place');
const cardLinkInput = formPhoto.querySelector('.popup__input_type_url');

const validationEditForm = new FormValidator(validationConfig, formEditProfile);
const validationPhotoForm = new FormValidator(validationConfig, formPhoto);

function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
};

editButton.addEventListener('click', function () {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}); 

addButton.addEventListener('click', function () {
  openPopup(popupPhoto);
  popupPlace.value = '';
  popupLink.value = '';
  validationPhotoForm.resetFormCondition();
}); 

function closePopup (popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

function submitEditProfileForm (evt) {
  evt.preventDefault(); 

  nameInput.getAttribute('value');
  jobInput.getAttribute('value');

  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;

  closePopup(popupProfile);
}

formEditProfile.addEventListener('submit', submitEditProfileForm);

function closePopupOverlay (popupElement) {
  popupElement.addEventListener("mousedown", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(popupElement)
  }
});
};

closePopupOverlay(popupProfile);
closePopupOverlay(popupPhoto);
closePopupOverlay(popupImage);

function closePopupEsc (evt) {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  };
}; 

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

function createCard (cardElement) {
  // Возвращаем получившуюся карточку
  return new Card(cardElement, '#template', openPopupImage).generateCard();
};

function renderCard (cardElement) {
  elements.prepend(cardElement);
};

formPhoto.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cards = { name: cardNameInput.value, link: cardLinkInput.value };
  renderCard(createCard(cards));
  closePopup(popupPhoto);
  evt.target.reset();
});  

function openPopupImage(name, link) {
  popupImageOpen.src = link;
  popupImageOpen.alt = name;
  popupHeading.textContent = name;
  openPopup(popupImage);
};

initialCards.forEach((cardElement) => {
  renderCard(createCard(cardElement));
});

validationEditForm.enableValidation();
validationPhotoForm.enableValidation();
