import '../pages/index.css';
import Api from '../components/Api.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { validationConfig, initialCards } from '../utils/constants.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithSubmit from '../components/PopupWithSubmit';

const page = document.querySelector('.page');
const content = document.querySelector('.content');
const profile = document.querySelector('.profile');
const addButton = document.querySelector('.profile__add-button');
const profileInfo = document.querySelector('.profile__info');
const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.profile-popup');
const popupPhoto = document.querySelector('.popup_photo');
const popupContainer = document.querySelector('.profile-popup__container');
const popupContainerPhoto = document.querySelector('.popup__container_photo');
const formEditProfile = document.querySelector('.popup__form_profile');
const formPhoto = document.querySelector('.popup__form_photo');
const formAvatar = document.querySelector('.popup__form_avatar');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const buttonAvatar = document.querySelector('.profile__avatar-edit-button');
const cardListSelector = '.elements';
const cardSelector = '.card-template';

let userId;

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '102a038a-4e75-47d3-b5e0-c0f094086372',
    'Content-Type': 'application/json'
  }
});

Promise.all([api.getProfile(), api.getInitialCards()])
  .then(([profileInfo, cardsData]) => {
    userId = profileInfo._id;
    userInfo.editProfile(profileInfo);
    cardsList.renderItems(cardsData);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });


const userInfo = new UserInfo({ 
  userNameSelector: '.profile__name',
  userInfoSelector: '.profile__description',
  userAvatarSelector: '.profile__avatar', });
 

  const validationEditForm = new FormValidator(validationConfig, formEditProfile);
  const validationPhotoForm = new FormValidator(validationConfig, formPhoto);
  const validationAvatarForm = new FormValidator(validationConfig, formAvatar);
  
  validationEditForm.enableValidation();
  validationPhotoForm.enableValidation();
  validationAvatarForm.enableValidation();

  addButton.addEventListener('click', () => {
    validationPhotoForm.resetFormCondition();
    popupWithFormAdd.open();
  });
  
  const popupWithFormAdd = new PopupWithForm(
    {
      submitForm: () => {
        popupWithFormAdd.renderLoading(true);
        const newCard = popupWithFormAdd.getInputValues();
        api
          .addCard(newCard)
          .then((res) => {
            cardsList.addItem(createCard(res));
            popupWithFormAdd.close();
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            popupWithFormAdd.renderLoading(true);
          });
      },
    },
    '.popup_photo'
  );
  popupWithFormAdd.setEventListeners();

  const createCard = (data) => {
    const card = new Card(
      {
        data: data,
        userId: userId,
        handleCardClick: (name, link) => {
          popupViewImage.open(name, link);
        },
  
        handleDeleteCard: (cardId) => {
          popupWithConfirm.open();
          popupWithConfirm.submitCallback(() => {
            api
              .deleteCard(cardId)
              .then(() => {
                popupWithConfirm.close();
                card.deleteCard();
              })
              .catch((err) => {
                console.log(`Error: ${err}`);
              });
          });
        },
  
        handleAddLike: (cardId) => {
          api
            .addLike(cardId)
            .then((data) => {
              card.handleLikeButton(data);
            })
            .catch((err) => {
              console.log(`Error: ${err}`);
            });
        },
        handleDeleteLike: (cardId) => {
          api
            .deleteLike(cardId)
            .then((data) => {
              card.handleLikeButton(data);
            })
            .catch((err) => {
              console.log(`Error: ${err}`);
            });
        },
      },
      cardSelector
    );
    return card.generateCard();
  };

  const cardsList = new Section(
    {
      renderer: (item) => {
        cardsList.addItem(createCard(item)); 
      },
    },
    cardListSelector
  );


const popupViewImage = new PopupWithImage('.popup_image');
popupViewImage.setEventListeners();

const popupWithConfirm = new PopupWithSubmit('.popup_confirm');
popupWithConfirm.setEventListeners();


editButton.addEventListener('click', () => {
  const profileInfo = userInfo.getProfile();
  nameInput.value = profileInfo.name;
  jobInput.value = profileInfo.about;
  validationEditForm.resetFormCondition();
  popupWithFormEdit.open();
});

const popupWithFormEdit = new PopupWithForm(
  {
    submitForm: () => {
      popupWithFormEdit.renderLoading(true);
      const newInfo = popupWithFormEdit.getInputValues();
      api
      .patchProfile(newInfo)
      .then((res) => {
        userInfo.editProfile(res);
        popupWithFormEdit.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupWithFormEdit.renderLoading(false);
      });
    },
  },
  '.profile-popup'
);
popupWithFormEdit.setEventListeners();

buttonAvatar.addEventListener('click', () => {
  validationAvatarForm.resetFormCondition();
  popupWithFormAvatar.open();
});

const popupWithFormAvatar = new PopupWithForm(
  {
    submitForm: () => {
      popupWithFormAvatar.renderLoading(true);
      const newAvatar = popupWithFormAvatar.getInputValues();
      api
        .setUserAvatar(newAvatar)
        .then((res) => {
          userInfo.editProfile(res);
          popupWithFormAvatar.close();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          popupWithFormAvatar.renderLoading(false);
        });
    },
  },
  '.popup_avatar'
);
popupWithFormAvatar.setEventListeners();

