let page = document.querySelector('.page');
let content = page.querySelector('.content');
let profile = content.querySelector('.profile');
let profileInfo = profile.querySelector('.profile__info');
let editButton = profileInfo.querySelector('.profile__edit-button');
let popup = page.querySelector('.popup');
let popupContainer = popup.querySelector('.popup__container');
let closeButton = popupContainer.querySelector('.popup__close-icon');
let formElement = popupContainer.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_description');
let profileName = profileInfo.querySelector('.profile__name');
let profileDescription = profile.querySelector('.profile__description');

function openPopup () {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}

editButton.addEventListener('click', openPopup);

function closePopup () {
  popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closePopup);

function handleFormSubmit (evt) {
  evt.preventDefault(); 

  nameInput.getAttribute('value');
  jobInput.getAttribute('value');

  profileName;
  profileDescription;

  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;

  closePopup ();
}

formElement.addEventListener('submit', handleFormSubmit);