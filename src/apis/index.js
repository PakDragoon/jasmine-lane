import { url } from "../config"

export const createUser = (data) => {
    const obj = {
        method: 'POST',
        url: `${url}/users/create`,
        data
    }
    return obj
}

export const loginUser = (data) => {
    const obj = {
        method: 'POST',
        url: `${url}/users/login`,
        data
    }
    return obj
}

export const getAdmins = (token) => {
    const obj = {
        method: 'GET',
        url: `${url}/users`,
        headers: {
          Authorization: `Bearer ${token}`
        }
    }
    return obj
}

export const createAdmin = (data, token) => {
    const obj = {
        method: "POST",
        url: `${url}/users/create`,
        headers: {
          Authorization: `Bearer ${token}`
        },
        data,
    }
    return obj
}