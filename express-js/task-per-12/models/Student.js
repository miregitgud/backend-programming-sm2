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
  static async create(data) {
    return await query.create('students', data)
  }

  static async find(id) {
    return await query.find('students', id)
  }
  
  static async update(id, data) {
    return await query.update('students', id, data)
  }

  static async delete(id) {
    return await query.destroy('students', id)
  }
}
// export class Student
module.exports = Student