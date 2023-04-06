export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};


export class FormValidator {
  constructor(validationConfig, formElement) {
    this._validationConfig = validationConfig;
    this._formElement = formElement;
    this._buttonElement = this._formElement.querySelector(this._validationConfig.submitButtonSelector); 
    this._inputList = Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector));
  }
  
//функция показывает ошибку
_showInputError = (inputElement, validationMessage) => {
  const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`); 
  inputElement.classList.add(this._validationConfig.inputErrorClass);                       
  errorElement.textContent = validationMessage;                             
  errorElement.classList.add(this._validationConfig.errorClass);                    
};

//функция скрывает ошибку
_hideInputError = (inputElement) => {
  const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);  
  errorElement.classList.remove(this._validationConfig.errorClass);  
  inputElement.classList.remove(this._validationConfig.inputErrorClass);                   
  errorElement.textContent = '';                                              
};

_toggleButtonOff() {
  this._buttonElement.classList.add(this._validationConfig.inactiveButtonClass);
  this._buttonElement.disabled = true;
};

_toggleButtonActive() {
  this._buttonElement.classList.remove(this._validationConfig.inactiveButtonClass);
  this._buttonElement.disabled = false;
};

//обходит массив полей,колбек вернет тру если все значения верны
_hasInvalidInput = () => {
    return this._inputList.some((inputElement) => { 
    return !inputElement.validity.valid; 
  });
};

//функция для валидности кнокпи
_toggleButtonState = () => {
  if (this._hasInvalidInput()) { 
    this._toggleButtonOff();
  } else {
    this._toggleButtonActive();
  }
}; 

resetFormCondition = () => {
  this._toggleButtonState(); 
  this._inputList.forEach(inputElement => { 
    this._hideInputError(inputElement);
  });
};

//функция для проверки валидности
_checkInputValidity = (inputElement) => {
  if (!inputElement.validity.valid) {                                        
    this._showInputError(inputElement, inputElement.validationMessage);   
  } else {
    this._hideInputError(inputElement);                                  
  }
};

//функция слушаетелей
_setEventListeners = () => {
  this._toggleButtonState(); 
  this._inputList.forEach((inputElement) => {                             
    inputElement.addEventListener('input', () => {            
      this._checkInputValidity(inputElement);                
      this._toggleButtonState();                  
    });
  });
};
 
enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(this._validationConfig.formSelector));
  formList.forEach((formElement) => {                              
    formElement.addEventListener('submit', function (evt) {        
      evt.preventDefault();                                         
    });                                         
    this._setEventListeners();                                               
  });
};
}
