const userItems = [
  {
    user_id: 3609,
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@metropolia.fi',
    role: 'user',
    password: 'password',
  },
  {
    user_id: 3602,
    name: 'Jane Smith',
    username: 'janesmith',
    email: 'jane@metropolia.fi',
    role: 'admin',
    password: 'password123',
  },
  {
    user_id: 3605,
    name: 'Alex Johnson',
    username: 'alexj',
    email: 'alex.johnson@metropolia.fi',
    role: 'user',
    password: 'securepassword',
  },
  {
    user_id: 3610,
    name: 'Emily Davis',
    username: 'emilyd',
    email: 'emily.davis@metropolia.fi',
    role: 'user',
    password: 'mypassword',
  },
];

const listAllUsers = () => {
    return userItems;
}

const findUserById = (id) => {
    return userItems.find((item) => item.user_id == id)
}

const deleteUserById = (id) => {
    const index = userItems.find((item) => item.user_id == id)
    if (index){
        userItems.splice(index, 1)
        return true;
    }
    return false;
}

const modifyUser = (user, id) => {
  const index = userItems.findIndex((item) => item.user_id == id);
  if (index !== -1) {
    userItems[index] = { ...userItems[index], ...user };
    return userItems[index];
  }
  return null;
};

const addUser = (user) => {
  const {name, username, email, role, password} = user
  let maxId = 0;

  for (const item of userItems) {
    if (item.user_id > maxId) {
      maxId = item.user_id;
    }
  }

  const newId = maxId + 1;
    userItems.unshift({
    user_id: newId,
    name,
    username,
    email,
    role,
    password,
  });
  return { user_id : newId };
}
export {listAllUsers,findUserById,deleteUserById,modifyUser,addUser}