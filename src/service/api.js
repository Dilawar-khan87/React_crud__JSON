import axios from "axios";

const url = "http://localhost:3003/users";

export const getAllUsers = async () => {
    return await axios.get(url);
    };

export const addUser = async (user) => {
    return await axios.post(url, user);
    }
export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
    }
export const updateUser = async (user) => {
    return await axios.put(`${url}/${user.id}`, user);
    }
export const getUserById = async (id) => {
    return await axios.get(`${url}/${id}`);
    }
export const editUser = async (id,user) => {
    return await axios.put(`${url}/${user.id}`, user);
    }