// import model patient
const Patient = require("../models/Patient");

// membuat class CovidController
class CovidController {
  async index(req, res) {
    const patient = await Patient.all();

    const data = {
      message: `Showing all patients data`,
      data: patient,
    };

    res.json(data);
  }

  async store(req, res) {
    const patient = await Patient.create(req.body);

    const data = {
      message: `Adding patient data with the name ${req.body.name}`,
      data: patient,
    };

    res.json(data);
  }

  async update(req, res) {
    const { id } = req.params;

    const patient = await Patient.find(id);

    if (patient) {
      const patient = await Patient.update(id, req.body);
      const data = {
        message: `Editing patients data with id of ${id}`,
        data: patient,
      };
      res.status(200).json(data);
    }

    if (!patient) {
      const data = {
        message: `Patients data not found, please double check your input and try again`,
      };
      res.status(404).json(data);
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    const patient = await Patient.find(id);

    if (patient) {
      await Patient.delete(id);
      const data = {
        message: `Deleting patient with id of ${id}`,
      }
      res.status(200).json(data);
    }

    if (!patient) {
      const data = {
        message: `Data not found, double check your input and try again.`,
      }
      res.status(404).json(data);
    }
  }

  async show(req, res) {
    const { id } = req.params;
    const patient = await Patient.find(id);

    if (patient) {
      const data = {
        message: `Showing data patient with id of ${id}`,
        data: patient,
      };
      res.status(200).json(data);
    } if (!patient) {
      const data = {
        message: `Patients data not found, double check your input and try again.`
      };
      res.status(404).json(data);
    }
  }

  async search(req, res) {
    const { name } = req.params;
    const patient = await Patient.search(name);

    if(patient) {
      const data = {
        message: `Showing all patients with the inputted keyword.`,
        data: patient,
      };

      res.status(200).json(data);
    } if (!patient) {
      const data = {
        message: `Data not found, double check your input and try again.`,
      };

      res.status(404).json(data);
    }
  }

  async positive(req, res) {
    const status = `positive`;
    const patients = await Patient.findByStatus(status);

    const data = {
      message: `Showing all patient with ${status} status.`,
      data: patients,
    };

    res.status(200).json(data);
  }

  async recovered(req, res) {
    const status = `recovered`;
    const patients = await Patient.findByStatus(status);

    const data = {
      message: `Showing all patient with ${status} status.`,
      data: patients,
    };

    res.status(200).json(data);
  }

  async dead(req, res) {
    const status = `dead`;
    const patients = await Patient.findByStatus(status);

    const data = {
      message: `Showing all patient with ${status} status.`,
      data: patients,
    };

    res.status(200).json(data);
}

}


// Membuat object CovidController
const object = new CovidController();

// Export object CovidController
module.exports = object;
