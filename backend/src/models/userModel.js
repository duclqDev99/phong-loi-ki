
const pool = require('../database');

async function findAll() {
  const [rows] = await pool.query('SELECT * FROM users');
  return rows;
}

const getUsers = async () => {
    const [rows] = await pool.query('SELECT * FROM users');
    return rows;
  };
  
  const getUserById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  };
  
  const createUser = async (user) => {
    const { username, password, fullname, email, phone, gender, birthday } = user;
    const [result] = await pool.query('INSERT INTO users (username, password, fullname, email, phone, gender, birthday) VALUES (?, ?, ?, ?, ?, ?, ?)', [username, password, fullname, email, phone, gender, birthday]);
    return result.insertId;
  };
  
  const updateUser = async (id, user) => {
    const { username, password, fullname, email, phone, gender, birthday } = user;
    await pool.query('UPDATE users SET username = ?, password = ?, fullname = ?, email = ?, phone = ?, gender = ?, birthday = ? WHERE id = ?', [username, password, fullname, email, phone, gender, birthday, id]);
  };
  
  const deleteUser = async (id) => {
    await pool.query('DELETE FROM users WHERE id = ?', [id]);
  };
  

module.exports = { 
    findAll,
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
 };
