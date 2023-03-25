const setting = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

//функция показывает ошибку
const showInputError = (formElement, inputElement, validationMessage, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`); 
  inputElement.classList.add(config.inputErrorClass);                       
  errorElement.textContent = validationMessage;                             
  errorElement.classList.add(config.errorClass);                    
};

//функция скрывает ошибку
const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);  
  errorElement.classList.remove(config.errorClass);  
  inputElement.classList.remove(config.inputErrorClass);                   
  errorElement.textContent = '';                                              
};

//функция для проверки валидности
const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {                                        
    showInputError(formElement, inputElement, inputElement.validationMessage, config);   
  } else {
    hideInputError(formElement, inputElement, config);                                  
  }
};

//обходит массив полей,колбек вернет тру если все значения верны
  const hasInvalidInput = (inputList) => {
    return inputList.some(input => !input.validity.valid) 
};

//функция для валидности кнокпи
const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {                    
    buttonElement.classList.add(config.inactiveButtonClass);  
    buttonElement.disabled = true;  
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass); 
    buttonElement.disabled = false;
  } 
}; 

//функция слушаетелей
const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));  
  const buttonElement = formElement.querySelector(config.submitButtonSelector); 
  toggleButtonState(inputList, buttonElement, config); 
  inputList.forEach((inputElement) => {                             
    inputElement.addEventListener('input', function () {            
      checkInputValidity(formElement, inputElement, config);                
      toggleButtonState(inputList, buttonElement, config);                  
    });
  });
};
 
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {                              
    formElement.addEventListener('submit', function (evt) {        
      evt.preventDefault();                                         
    }); 
    formList.forEach((formElement) => {                                         
      setEventListeners(formElement, config);                                               
    });
  });
};

enableValidation(setting);