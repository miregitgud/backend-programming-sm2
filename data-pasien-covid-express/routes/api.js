// import Patient Controller
const CovidController = require("../controllers/CovidController");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Express");
});

router.get("/patients", CovidController.index);
router.post("/patients", CovidController.store);
router.put("/patients/:id", CovidController.update);
router.delete("/patients/:id", CovidController.destroy);
router.get("/patients/:id", CovidController.show);
router.get("/patients/search/:name", CovidController.search);
router.get("/patients/status/positive", CovidController.positive);
router.get("/patients/status/recovered", CovidController.recovered);
router.get("/patients/status/dead", CovidController.dead);

// export router
module.exports = router;
