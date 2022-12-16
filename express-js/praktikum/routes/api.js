// import studentController
const studentController = require("../controllers/StudentController");

// import express
const express = require("express");

// membuat object router
const router = express.Router();

/*
* Membuat routing
* Method get menerima 2 params
* Param 1 adalah endpoint
* Param 2 adalah callback.
* Callback menerima object req dan res
*/
router.get("/", (req, res) => {
    res.send("Hello Express");
});

// routing student
router.get("/students", studentController.index);

router.post("/students", studentController.store);

router.put("/students/:id", studentController.update);

router.delete("/students/:id", studentController.destroy);

// kode selanjutnya routing students

// export router
module.exports = router;