import { optionsApi } from "./constants";


class Api {
  constructor(options) {
    this.url = options.url;
  }

  _checkResponseError = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfoApi(token) {
    return fetch(`${this.url}/users/me`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(this._checkResponseError)
  }

  setUserInfoApi(userData, token) {
    return fetch(`${this.url}/users/me`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: userData.name,
          about: userData.about
        })
      })
      .then(this._checkResponseError)
  }

  setUserAvatarApi(userData, token) {
    return fetch(`${this.url}/users/me/avatar`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          avatar: userData.avatar
        })
      })
      .then(this._checkResponseError)
  }

  getInitialCards(token) {
    return fetch(`${this.url}/cards`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(this._checkResponseError)
  }

  addCard(data, token) {
    return fetch(`${this.url}/cards`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          link: data.link
        })
      })
      .then(this._checkResponseError)
  }

  deleteCard(cardId, token) {
    return fetch(`${this.url}/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      .then(this._checkResponseError)
  }

  handleToggleLikeApi(cardId, isLiked, token) {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
        method: `${isLiked ? "DELETE" : "PUT"}`,
        headers: {
          Authorization: `Bearer ${token}`,

        },
      })
      .then(this._checkResponseError)
  }

  getAllPromise(token) {
    return Promise.all([this.getUserInfoApi(token), this.getInitialCards(token)])
  }
}

export const api = new Api(optionsApi);
