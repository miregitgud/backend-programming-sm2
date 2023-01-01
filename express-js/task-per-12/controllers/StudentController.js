// import Model Student
const Student = require("../models/Student");

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();

    const data = {
      message: `Menampilkkan semua students`,
      data: students,
    };

    res.json(data);
  }

  async store(req, res) {
    const student = await Student.create(req.body);

    const data = {
      message: `Adding student data with the name ${req.body.nama}`,
      data: student,
    };

    res.json(data);
  }

  async update(req, res) {
    const { id } = req.params;

    const student = await Student.find(id);

    if (student) {
      const student = await Student.update(id, req.body);
      const data = {
        message: `Editing students data with id of ${id}`,
        data: student,
      };
      res.status(200).json(data);
    }

    else {
      const data = {
        message: `Student data not found, please double check your input and try again`,
      };
      res.status(404).json(data);
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      await Student.delete(id);
      const data = {
        message: `Deleting student with id of ${id}`,
      }
      res.status(200).json(data);
    }

    else {
      const data = {
        message: `Data not found, double check your input and try again.`,
      }
      res.status(404).json(data);
    }
  }

  async show(req, res) {
    const {id} = req.params;
    const student = await Student.find(id);

    if (student) {
      const data = {
        message: `Showing data student with id of ${id}`,
        data: student,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: `Student not found, double check your input and try again.`
      };
      res.status(404).json(data);
    }
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
