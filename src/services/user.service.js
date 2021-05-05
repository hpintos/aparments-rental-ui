// import { BehaviorSubject } from 'rxjs';

import { authHeader, handleResponse } from '../utlils/httpHelpers';

const API_URL = 'http://localhost:5000';

export const authenticationService = {
    login,
    logout,
};

export const userService = {
    getAll,
    getById,
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    };

    return fetch(`${API_URL}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then((user) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${API_URL}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${API_URL}/users/${id}`, requestOptions).then(handleResponse);
}
