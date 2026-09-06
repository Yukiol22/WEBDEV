import promisePool from "../../utils/database.js";

const listAllUsers = async () => {
    const [rows] = await promisePool.query("select * from wsk_users")
    console.log(rows)
    return rows
}
const findUserByUsername = async (username) => {
  const [rows] = await promisePool.execute(
    'SELECT * FROM wsk_users WHERE username = ?',
    [username]
  );
  if (rows.length === 0) return null;
  return rows[0];
};

const findUserById = async (id) => {
       const [rows] = await promisePool.execute('SELECT * FROM wsk_users WHERE user_id = ?', [id]);
       if (rows.length === 0) {
        return false;
     }
       console.log(rows)
        return rows[0];
}

const deleteUserById = async (id) => {
    const [rows] = await promisePool.execute('DELETE FROM wsk_users WHERE user_id = ?', [id]);
    console.log('rows', rows);
     if (rows.affectedRows === 0) {
        return false;
     }
     return {message: 'success'};
};


const modifyUser = async (req, res, next) => {
  const targetId = Number(req.params.id);
  const currentUser = res.locals.user;

  if (currentUser.user_id !== targetId && currentUser.role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
  }else return {message: 'success'};
};

const addUser = async (user) => {
  const { name, username, email, password, role } = user;
  const sql = `
    INSERT INTO wsk_users (name, username, email, password, role) 
    VALUES (?, ?, ?, ?, ?)
  `;
  const [result] = await promisePool.execute(sql, [name, username, email, password, role || 'user']);
  if (result.affectedRows === 0) return false;
  return { user_id: result.insertId };
};

export {listAllUsers,findUserById,deleteUserById,modifyUser,addUser, findUserByUsername}