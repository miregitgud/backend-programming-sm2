// import database
const query = require("./query");
const db = require("../config/database");

// class Model Patient
class Patient {
  //  method static all untuk get semua data pasien
  static async all() {
    return await query.get('patients');
  }
  // method create untuk membuat data pasien baru
  static async create(data) {
    return await query.create('patients', data)
  }
  // method find untuk mencari id yang digunakan di fungsi seperti update
  static async find(id) {
    return await query.find('patients', id)
  }
  // method update untuk mengubah data yang sudah ada
  static async update(id, data) {
    return await query.update('patients', id, data)
  }
  // method delete untuk menghapus data yang sudah ada
  static async delete(id) {
    return await query.destroy('patients', id)
  }
  // method search untuk mencari data berdasarkan nama dari data
  static async search(name) {
    return await query.search('patients', name)
  }
  // method findByStatus untuk mencari data pasien dengan status yang terinput
  static async findByStatus(status) {
    return await query.findByStatus('patients', status)
  }
}
// export class Patient
module.exports = Patient