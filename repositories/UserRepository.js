import { User } from "../models/User.js"

const saveUser = async (userModel) => {
    const save = await User.create(userModel);
    return save;
}

const getUserById = async (id) => {
    return await User.findByPk(id);
}

const getAllUsers = async () => {
    return await User.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
}

const deleteUserById = async (id) => {
    return await User.destroy({where: {id: id}});
}

const updateUserById = async (userModel, id) => {
    try {
        const update = await User.update(userModel, {where:{id:id}});
        if(update[0] === 1){
            return {message: ` user updated with success`};
        }else{
            return {message: `can not find ${id} to update`, status: 404};
        }
    } catch (error) {
        console.error();
    }
}

const factory = {
    saveUser,
    getUserById,
    getAllUsers,
    deleteUserById,
    updateUserById
}

export default factory;