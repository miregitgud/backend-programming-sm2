// Refactor untuk query di file model

// import database
const db = require("../config/database");

const get = (table) => {
  if (!table) {
    throw new Error('no table selected!');
  }

  return new Promise((resolve, reject) => {
    const sql = `SELECT * from ${table}`;
    db.query(sql, (err, results) => {
      resolve(results);
    });
  });
}

const create = async (table, data) => {
  if (!table) {
    throw new Error('no table selected!');
  }

  const id = await new Promise((resolve, reject) => {
    const sql = `INSERT INTO ${table} SET ?`;
    db.query(sql, data, (err, results) => {
      resolve(results.insertid);
    });
  });

  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM ${table} WHERE id = ?`;
    db.query(sql, id, (err, results) => {
      resolve(results);
    });
  });
}

const find = (table, id) => {
  console.log(id);
  if (!table) {
    throw new Error('no table selected!');
  }

  return new Promise((resolve, reject) => {
    const sql =  `SELECT * FROM ${table} WHERE id = ?`;
    db.query(sql, id, (err, results) => {
      const [patient] = results;
      resolve(patient);
    });
  });
}

const update = async (table, id, data) => {
  if (!table) {
    throw new Error('no table selected!');
  }

  await new Promise((resolve, reject) => {
    const sql = `UPDATE ${table} SET ? WHERE id = ?`;
    db.query(sql, [data, id], (err, results) => {
      resolve(results);
    });
  });

  const patient = await find(table, id);
  return patient;
}

const destroy = async (table, id) => {
  if (!table) {
    throw new Error('no table selected!');
  }

  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM ${table} WHERE id = ?`;
    db.query(sql, id, (err, results) => {
      resolve(results);
    });
  });
}

const search = async (table, name) => {
  if (!table) {
    throw new Error('no table selected!');
  }
  
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM ${table} WHERE name LIKE '%${name}%'`;
    db.query(sql, name, (err, results) => {
      const [patient] = results;
      resolve(patient);
    }); 
  });
}

const findByStatus = async (table, status) => {
  if (!table) {
    throw new Error(`no table selected!`);
  }

  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM ${table} WHERE status = ?`;
    db.query(sql, status, (err, results) => {
        resolve(results);
    });
  });
}

// export method - method yang ada 
module.exports = {
  get,
  create,
  find,
  update,
  destroy,
  search,
  findByStatus
}