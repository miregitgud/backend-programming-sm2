// import database
const query = require("./query");
const db = require("../config/database");

// membuat class Model Student
class Student {
  /**
   * Membuat method static all.
   */
  static async all() {
    // return Promise sebagai solusi Asynchronous
    return await query.get('students');
  }

  /**
   * TODO 1: Buat fungsi untuk insert data.
   * Method menerima parameter data yang akan diinsert.
   * Method mengembalikan data student yang baru diinsert.
   */
  static async create(data) {
    return await query.create('students', data)
  }

  static async find(id) {
    return await query.find('students', id)
  }
  
  static async update(id, data) {
    return await query.update('students', id, data)
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM students WHERE id = ?`;
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }
}
// export class Student
module.exports = Student