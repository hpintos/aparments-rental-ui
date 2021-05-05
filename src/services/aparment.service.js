import { authHeader, handleResponse } from '../utlils/httpHelpers';

const API_URL = 'http://localhost:5000';

export const apartmentService = {
    getAll,
    getById,
    save,
    update,
    remove,
};

function save(params) {
    throw new Error('Not implemented yet');
}

function update(params) {
    throw new Error('Not implemented yet');
}

function remove(params) {
    throw new Error('Not implemented yet');
}

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${API_URL}/apartments`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${API_URL}/apartments/${id}`, requestOptions).then(handleResponse);
}
