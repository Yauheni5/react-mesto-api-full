import { optionsApi } from "./constants";

class AuthApi {
  constructor(options) {
    this.url = options.url;
  }

  _checkResponseError = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }

  registrationUserApi (userRegistrationInfo) {
    return fetch(`${this.url}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        email: userRegistrationInfo.email,
        password: userRegistrationInfo.password
      })
    })
    .then(this._checkResponseError)
  }

  authorizationUserApi (userRegistrationInfo) {
    return fetch(`${this.url}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        email: userRegistrationInfo.email,
        password: userRegistrationInfo.password
      })
    })
    .then(this._checkResponseError)
  }

  checkUserToken (token) {
    return fetch(`${this.url}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(this._checkResponseError)
  }
}

export const authorizationApi = new AuthApi (optionsApi);
