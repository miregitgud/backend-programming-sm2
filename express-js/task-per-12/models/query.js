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

const find = async (table, id) => {
  if (!table) {
    throw new Error('no table selected!');
  }

  return new Promise((resolve, reject) => {
    const sql =  `SELECT * FROM ${table} WHERE ID = ?`;
    db.query(sql, id, (err, results) => {
      const [student] = results;
      resolve(student);
    })
  })
}

const update = async (table, data, id) => {
  if (!table) {
    throw new Error('no table selected!');
  }

  await new Promise((resolve, reject) => {
    const sql = "UPDATE students SET ? WHERE ID = ?";
    db.query(sql, [data, id], (err, results) => {
      resolve(results);
    });
  });

  const student = await this.find(table, id);
  return student;
}

module.exports = {
  get,
  create,
  find,
  update
}