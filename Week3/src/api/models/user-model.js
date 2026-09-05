import promisePool from "../../utils/database.js";

const listAllUsers = async () => {
    const [rows] = await promisePool.query("select * from wsk_users")
    console.log(rows)
    return rows
}

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


const modifyUser = async (user, id) => {
  const sql = promisePool.format(`UPDATE wsk_users SET ? WHERE user_id = ?`, [user, id]);
    const rows = await promisePool.execute(sql);
    console.log('rows', rows);
     if (rows[0].affectedRows === 0) {
        return false;
     }
     return {message: 'success'};
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

export {listAllUsers,findUserById,deleteUserById,modifyUser,addUser}