import '../pages/index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { validationConfig, initialCards } from '../utils/constants.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

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
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const cardListSelector = '.elements';
const cardNameInput = formPhoto.querySelector('.popup__input_type_place');
const cardLinkInput = formPhoto.querySelector('.popup__input_type_url');



const validationEditForm = new FormValidator(validationConfig, formEditProfile);
const validationPhotoForm = new FormValidator(validationConfig, formPhoto);

validationEditForm.enableValidation();
validationPhotoForm.enableValidation();

const popupViewImage = new PopupWithImage('.popup_image');
popupViewImage.setEventListeners();

function createCard(item) {
  // тут создаете карточку и возвращаете ее
  const card = new Card(item, '#template', (name, link) => {
    popupViewImage.open(name, link)
  });
  const cardElement = card.generateCard();
  return cardElement
}

  const cardList = new Section({
    data: initialCards,
    renderer: (item) => {
      cardList.addItem(createCard(item)); 
    }
  }, cardListSelector);

  cardList.renderItems();
  
  const userNameContainer = document.querySelector('.profile__name');
  const userInfoContainer = document.querySelector('.profile__description');
  
  const userInfo = new UserInfo(userNameContainer, userInfoContainer);

editButton.addEventListener('click', () => {
  const profileInfo = userInfo.getUserInfo();
  nameInput.value = profileInfo.name;
  jobInput.value = profileInfo.description;
  validationEditForm.resetFormCondition();
  popupWithFormEdit.open();
});

const popupWithFormEdit = new PopupWithForm(
  {
    submitForm: (evt) => {
      evt.preventDefault(); 
      userInfo.setUserInfo(popupWithFormEdit.getInputValues()); 
      popupWithFormEdit.close();
     }
    },
  '.profile-popup'
);
popupWithFormEdit.setEventListeners();

addButton.addEventListener('click', () => {
  validationPhotoForm.resetFormCondition(); 
  popupWithFormAdd.open();
});

const popupWithFormAdd = new PopupWithForm(
  {
    submitForm: (evt) => {
      evt.preventDefault(); 
      const [name, link] = popupWithFormAdd.getInputValues();
      createCard({name, link});
      cardList.addItem(createCard({name, link})); 
      popupWithFormAdd.close();
      }
    }, '.popup_photo');
    
popupWithFormAdd.setEventListeners();
