export default class Api {
    
    constructor(options) {
        // receive url server and headers
        this._headers = options.headers;
        this._url = options.baseUrl;
      }
    
      // check answer from server
      _handleResponse(res) {
        if (res.ok) {
          return res.json(); // if yes => return data
        }
        return Promise.reject(`Error: ${res.status}`); // or return error
      }
    
      // request to server and get data profile
      getProfile() {
        return fetch(`${this._url}/users/me`, {
          method: 'GET',
          headers: this._headers,
        }).then(this._handleResponse);
      }
    
      // change profile info on server
      patchProfile({ name, about }) {
        return fetch(`${this._url}/users/me`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
            name,
            about
          }),
        }).then(this._handleResponse);
      }
    
      getInitialCards() {
        return fetch(`${this._url}/cards`, {
          method: 'GET',
          headers: this._headers,
        }).then(this._handleResponse);
      }
    
      setUserAvatar({avatar}) {
        return fetch(`${this._url}/users/me/avatar`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
            avatar,
          }),
        }).then(this._handleResponse);
      }
    
      addCard({name, link}) {
        return fetch(`${this._url}/cards`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({
            name,
            link,
          }),
        }).then(this._handleResponse);
      }
    
      deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
          method: 'DELETE',
          headers: this._headers,
        }).then(this._handleResponse);
      }
    
      addLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
          method: 'PUT',
          headers: this._headers,
        }).then(this._handleResponse);
      }
    
      deleteLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
          method: 'DELETE',
          headers: this._headers,
        }).then(this._handleResponse);
      }

}