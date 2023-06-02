(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._headers=e.headers,this._url=e.baseUrl}var n,r;return n=t,(r=[{key:"_handleResponse",value:function(t){return t.ok?t.json():Promise.reject("Error: ".concat(t.status))}},{key:"getProfile",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then(this._handleResponse)}},{key:"patchProfile",value:function(t){var e=t.name,n=t.about;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:n})}).then(this._handleResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this._handleResponse)}},{key:"setUserAvatar",value:function(t){var e=t.avatar;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._handleResponse)}},{key:"addCard",value:function(t){var e=t.name,n=t.link;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:n})}).then(this._handleResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"addLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._handleResponse)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n){var r=e.data,o=e.userId,i=e.handleCardClick,u=e.handleDeleteCard,a=e.handleAddLike,l=e.handleDeleteLike;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=r,this._name=r.name,this._link=r.link,this._userId=o,this._likes=r.likes,this._cardId=r._id,this._handleDeleteCard=u,this._handleCardClick=i,this._handleAddLike=a,this._handleDeleteLike=l,this._cardTemplateSelector=n,this._cardOwnerId=r.owner._id}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this.element=this._getTemplate(),this._cardImage=this.element.querySelector(".element__image"),this.cardText=this.element.querySelector(".element__title"),this._likeButton=this.element.querySelector(".element__like"),this._deleteButton=this.element.querySelector(".element__trash"),this._likesCounter=this.element.querySelector(".element__like-counter"),this._cardImage.src=this._link,this._cardImage.alt="Фотография города ".concat(this._name),this.cardText.textContent=this._name,this._handleDeleteButton(),this._likesCounter.textContent=this._likes.length,this._checkLikeUser(),this._setEventListeners(),this.element}},{key:"deleteCard",value:function(){this.element.remove(),this.element=null}},{key:"handleLikeButton",value:function(t){this._likes=t.likes,this._likesCounter.textContent=this._likes.length,this._likeButton.classList.toggle("element__like_active")}},{key:"_checkLikeUser",value:function(){var t=this;this._data.likes.forEach((function(e){e._id===t._userId&&t._likeButton.classList.add("element__like_active")}))}},{key:"_handleDeleteButton",value:function(){this._userId!==this._cardOwnerId&&this._deleteButton.remove()}},{key:"_setEventListeners",value:function(){var t=this;this._deleteButton.addEventListener("click",(function(){t._handleDeleteCard(t._cardId)})),this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)})),this._likeButton.addEventListener("click",(function(){t._likeButton.classList.contains("element__like_active")?t._handleDeleteLike(t._cardId):t._handleAddLike(t._cardId)}))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,c(r.key),r)}}function l(t,e,n){return(e=c(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}var s=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,"_showInputError",(function(t,e){var n=r._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(r._validationConfig.inputErrorClass),n.textContent=e,n.classList.add(r._validationConfig.errorClass)})),l(this,"_hideInputError",(function(t){var e=r._formElement.querySelector(".".concat(t.id,"-error"));e.classList.remove(r._validationConfig.errorClass),t.classList.remove(r._validationConfig.inputErrorClass),e.textContent=""})),l(this,"_hasInvalidInput",(function(){return r._inputList.some((function(t){return!t.validity.valid}))})),l(this,"_toggleButtonState",(function(){r._hasInvalidInput()?r._toggleButtonOff():r._toggleButtonActive()})),l(this,"resetFormCondition",(function(){r._toggleButtonState(),r._inputList.forEach((function(t){r._hideInputError(t)}))})),l(this,"_checkInputValidity",(function(t){t.validity.valid?r._hideInputError(t):r._showInputError(t,t.validationMessage)})),l(this,"_setEventListeners",(function(){r._toggleButtonState(),r._inputList.forEach((function(t){t.addEventListener("input",(function(){r._checkInputValidity(t),r._toggleButtonState()}))}))})),l(this,"enableValidation",(function(){r._formElement.addEventListener("submit",(function(t){t.preventDefault()})),r._setEventListeners()})),this._validationConfig=e,this._formElement=n,this._buttonElement=this._formElement.querySelector(this._validationConfig.submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector))}var e,n;return e=t,(n=[{key:"_toggleButtonOff",value:function(){this._buttonElement.classList.add(this._validationConfig.inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_toggleButtonActive",value:function(){this._buttonElement.classList.remove(this._validationConfig.inactiveButtonClass),this._buttonElement.disabled=!1}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),f={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},p=document.querySelector(".profile__add-button"),y=document.querySelector(".profile__edit-button"),d=document.querySelector(".popup__form_profile"),h=document.querySelector(".popup__form_photo"),m=document.querySelector(".popup__form_avatar"),v=document.querySelector(".popup__input_type_name"),b=document.querySelector(".popup__input_type_description"),_=document.querySelector(".profile__avatar-edit-button");function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}var k=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}var O=function(){function t(e){var n=e.userNameSelector,r=e.userInfoSelector,o=e.userAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(n),this._userInfo=document.querySelector(r),this._userAvatar=document.querySelector(o)}var e,n;return e=t,n=[{key:"getProfile",value:function(){return{name:this._userName.textContent,about:this._userInfo.textContent}}},{key:"editProfile",value:function(t){this._userName.textContent=t.name,this._userInfo.textContent=t.about,this._userAvatar.src=t.avatar}}],n&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,C(r.key),r)}}function C(t){var e=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===P(e)?e:String(e)}var L=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"===t.key&&i.close()},(r=C(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.currentTarget===e.target||e.target.classList.contains("popup__close-icon"))&&t.close()}))}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},B.apply(this,arguments)}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function q(t){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},q(t)}var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(r);if(o){var n=q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._name=e._popup.querySelector(".popup__heading"),e._link=e._popup.querySelector(".popup__image"),e}return e=u,(n=[{key:"open",value:function(t,e){B(q(u.prototype),"open",this).call(this),this._link.src=e,this._link.alt=t,this._name.textContent=t}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(L);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=N(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},F.apply(this,arguments)}function V(t,e){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},V(t,e)}function N(t){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},N(t)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&V(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=N(r);if(o){var n=N(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===x(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=t.submitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitForm=r,n._popupForm=n._popup.querySelector(".popup__form"),n._popupInputList=n._popupForm.querySelectorAll(".popup__input"),n._submitButton=n._popupForm.querySelector(".popup__submit-button"),n._submitButtonText=n._submitButton.textContent,n}return e=u,(n=[{key:"getInputValues",value:function(){var t=this;return this._inputValues={},this._popupInputList.forEach((function(e){t._inputValues[e.name]=e.value})),this._inputValues}},{key:"setEventListeners",value:function(){var t=this;this._popupForm.addEventListener("submit",(function(){t._submitForm(t.getInputValues())})),F(N(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){F(N(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"renderLoading",value:function(t){this._submitButton.value=t?"Сохранение...":"Сохранить"}}])&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(L);function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==J(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}function H(){return H="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=z(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},H.apply(this,arguments)}function M(t,e){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},M(t,e)}function z(t){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},z(t)}var $,K=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&M(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=z(r);if(o){var n=z(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===J(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._form=e._popup.querySelector(".popup__form_confirm"),e._submitButton=e._form.querySelector(".popup__submit-button"),e}return e=u,(n=[{key:"submitCallback",value:function(t){this._handleSubmit=t}},{key:"setEventListeners",value:function(){var t=this;H(z(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmit()}))}},{key:"renderLoading",value:function(t){this._submitButton.value=t?"Удаление...":"Да"}}])&&G(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(L);function Q(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var W=new n({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-66",headers:{authorization:"102a038a-4e75-47d3-b5e0-c0f094086372","Content-Type":"application/json"}});Promise.all([W.getProfile(),W.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],l=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return Q(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];$=o._id,X.editProfile(o),rt.renderItems(i)})).catch((function(t){console.log("Error: ".concat(t))}));var X=new O({userNameSelector:".profile__name",userInfoSelector:".profile__description",userAvatarSelector:".profile__avatar"}),Y=new s(f,d),Z=new s(f,h),tt=new s(f,m);Y.enableValidation(),Z.enableValidation(),tt.enableValidation(),p.addEventListener("click",(function(){Z.resetFormCondition(),et.open()}));var et=new U({submitForm:function(){et.renderLoading(!0);var t=et.getInputValues();W.addCard(t).then((function(t){rt.addItem(nt(t)),et.close()})).catch((function(t){console.log(t)})).finally((function(){et.renderLoading(!1)}))}},".popup_photo");et.setEventListeners();var nt=function(t){var e=new i({data:t,userId:$,handleCardClick:function(t,e){ot.open(t,e)},handleDeleteCard:function(t){it.open(),it.submitCallback((function(){it.renderLoading(!0),W.deleteCard(t).then((function(){it.close(),e.deleteCard()})).catch((function(t){console.log("Error: ".concat(t))})).finally((function(){it.renderLoading(!1)}))}))},handleAddLike:function(t){W.addLike(t).then((function(t){e.handleLikeButton(t)})).catch((function(t){console.log("Error: ".concat(t))}))},handleDeleteLike:function(t){W.deleteLike(t).then((function(t){e.handleLikeButton(t)})).catch((function(t){console.log("Error: ".concat(t))}))}},".card-template");return e.generateCard()},rt=new k({renderer:function(t){rt.addItem(nt(t))}},".elements"),ot=new A(".popup_image");ot.setEventListeners();var it=new K(".popup_confirm");it.setEventListeners(),y.addEventListener("click",(function(){var t=X.getProfile();v.value=t.name,b.value=t.about,Y.resetFormCondition(),ut.open()}));var ut=new U({submitForm:function(){ut.renderLoading(!0);var t=ut.getInputValues();W.patchProfile(t).then((function(t){X.editProfile(t),ut.close()})).catch((function(t){console.log(t)})).finally((function(){ut.renderLoading(!1)}))}},".profile-popup");ut.setEventListeners(),_.addEventListener("click",(function(){tt.resetFormCondition(),at.open()}));var at=new U({submitForm:function(){at.renderLoading(!0);var t=at.getInputValues();W.setUserAvatar(t).then((function(t){X.editProfile(t),at.close()})).catch((function(t){console.log(t)})).finally((function(){at.renderLoading(!1)}))}},".popup_avatar");at.setEventListeners()})();