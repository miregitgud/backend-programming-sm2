// membuat class StudentController
class StudentController {
    index(req, res) {
        const data = {
            message: "Showing all students data.",
            data: []
        };
        res.json(data);
    }
    
    store(req, res) {
        const {name} = req.body

        const data = {
            message: `Adding students data with the name of ${name}.`,
            data: []
        }
        res.json(data);
    }

    update(req, res) {
        const {id} = req.params;
        const {name} = req.body

        const data = {
            message: `Updating students data with the id of ${id}, and name ${name}`,
            data: []
        }
        res.json(data);
    }

    destroy(req, res) {
        const {id} = req.params;

        const data = {
            message: `Deleting students data with the id of ${id}`,
            data: []
        }
        res.json(data);
    }
}

// membuat object StudentController
const cons = new StudentController();

// export object StudentController
module.exports = cons;