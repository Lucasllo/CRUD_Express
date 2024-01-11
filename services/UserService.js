import { userRepository } from "../repositories/UserRepository.js"

const saveUser = (userModel) => {
    return userRepository.saveUser();
}

const getUserById = (id) => {
    return userRepository.getUserById();
}

const getAllUsers = () => {
    return userRepository.getAllUsers();
}

const deleteUserById = (id) => {
    return userRepository.deleteUserById();
}

const updateUserById = (userModel, id) => {
    return userRepository.updateUserById(userModel, id);
}

const service = {
    saveUser,
    getUserById,
    getAllUsers,
    deleteUserById,
    updateUserById
}

export default service;