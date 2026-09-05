import { listAllUsers, findUserById, deleteUserById, modifyUser, addUser } from "../models/user-model.js";

const getUsers = async (req, res) => {
   await res.json(listAllUsers())
}

const getUserById = async(req, res) =>{
    const user = await findUserById(req.params.id)
    if (user){
        res.json(user);
    } else {
        res.sendStatus(404);
    }
}

const postUser = async (req, res) =>{
    const result = await addUser(req.body)
    if (result.user_id){
        res.status(201);
        res.json({ message: 'New user added.', result });
    } else {
        res.sendStatus(400);
    }
}

const putUser = (req, res) => {
    const updateUser = modifyUser(req.body, req.params.id)
    if (updateUser){
        res.json({ message: 'User updated', result: updateUser });
    }else{
    return res.status(404).json({ message: 'User not found' });
    }
}
const deleteUser = (req, res) =>{
    const isdeleted = deleteUserById(req.params.id)
    if (isdeleted){
        res.json({ message: 'User deleted successfully.', id: req.params.id });
    } else {
    res.status(404).json({ message: 'User not found.' });
  
    }
}

export {getUsers,getUserById,postUser,putUser,deleteUser}