const BASE_URL = 'https://reqres.in';

export const checkResponse = (response: Response) => {
    return response.ok
        ? response.json()
        : Promise.reject(`Ошибка ${response.status}`);
};

export const getCards = () => {
    return fetch(`${BASE_URL}/api/users?page=1&per_page=12`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(checkResponse);
};

export const getUser = (id: string) => {
    return fetch(`${BASE_URL}/api/users/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(checkResponse);
};

export const registerUser = (email: string, password: string) => {
    return fetch(`${BASE_URL}/api/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    }).then(checkResponse);
};

export const loginUser = (email: string, password: string) => {
    return fetch(`${BASE_URL}/api/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    }).then(checkResponse);
};
