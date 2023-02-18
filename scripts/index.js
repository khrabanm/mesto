let page = document.querySelector('.page');
let content = page.querySelector('.content');
let profile = content.querySelector('.profile');
let profileInfo = profile.querySelector('.profile__info');
let editButton = profileInfo.querySelector('.profile__edit-button');
let popup = page.querySelector('.popup');
let popupContainer = popup.querySelector('.popup__container');
let closeButton = popupContainer.querySelector('.popup__close-icon');

function openPopup () {
  popup.classList.add('popup_opened');
}

editButton.addEventListener('click', openPopup);

function closePopup () {
  popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closePopup);


let formElement = popupContainer.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__description');

function handleFormSubmit (evt) {
  evt.preventDefault(); 

  nameInput.getAttribute('value');
  jobInput.getAttribute('value');

  let profileName = profileInfo.querySelector('.profile__name');
  let profileDescription = profile.querySelector('.profile__description');

  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;

  closePopup ();
}

formElement.addEventListener('submit', handleFormSubmit);