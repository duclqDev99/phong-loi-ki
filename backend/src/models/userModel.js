const knex = require('knex');
const knexConfig = require('./knex');
const db = knex(knexConfig.development);

const bcrypt = require('bcrypt');
const saltRounds = 10;

const tableName = 'users';

async function findAll() {
  const rows = await db(tableName).select('*').orderBy('id', 'desc');
  return rows;
}

const getUsers = async () => {
  const rows = await db(tableName).select('*').orderBy('id', 'desc');
  return rows;
};

const getUserById = async (id) => {
  const row = await db(tableName).where('id', id).select('*').first();
  return row;
};

const getUserByUsername = async (username) => {
  const row = await db(tableName).where('username', username || '').select('*').first();
  /*console.log(row.toSQL());*/
  const query = db(tableName).where('username', username || '').select('*').first();
  console.log(query.toSQL());
  return row;
};

const createUser = async (user) => {
  try {
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);

    const insertedIds = await db.transaction(async (trx) => {
      const ids = await trx(tableName).insert({
        username: user.username,
        password: hashedPassword,
        fullname: user.fullname,
        email: user.email,
        phone: user.phone,
        gender: user.gender,
        birthday: user.birthday,
      }).returning('id');

      return ids;
    });

    const insertedId = insertedIds[0];
    return insertedId;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

const updateUser = async (id, user) => {
  const trx = await db.transaction();

  var updateData = {
    username: user.username,
    fullname: user.fullname,
    email: user.email,
    phone: user.phone,
    gender: user.gender,
    birthday: user.birthday,
    updated_at: new Date()
  }

  if (user.password) {
    updateData.password = await bcrypt.hash(user.password, saltRounds);
  }


  try {
    await trx(tableName).where('id', id).update(updateData);

    await trx.commit();
  } catch (error) {
    await trx.rollback();
    throw error;
  }
};

const deleteUser = async (id) => {
  await db(tableName).where('id', id).del();
};

module.exports = {
  findAll,
  getUsers,
  getUserById,
  createUser,
  getUserByUsername,
  updateUser,
  deleteUser
};
