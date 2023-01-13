const express = require('express')
const router = express.Router()
const teacherController = require('../controller/teacherController')
const studentController = require('../controller/studentController')
const middleware = require('../middleware/auth')



//====================// Teacher //=================================================

//=================// teacher register
router.post("/createTeacher", teacherController.createTeacher);

//=================// login
router.post("/teacherLogin", teacherController.teacherLogin);




//====================// Student //=================================================

//=================// add student
router.post("/addStudent",middleware.authentication,studentController.createStudent);

//=================// update student details
router.put("/student/:studentId",middleware.authentication,middleware.authorization,studentController.updateStudent);

//=================// Delete a Student
router.delete("/student/:studentId",middleware.authentication,middleware.authorization,studentController.deleteStudent);

//=================// Student List
router.get("/getstudent/",middleware.authentication,studentController.studentList)


router.all("/*", function (req, res) {
  res.status(400).send({ status: false, message: "invalid http request" });
});

module.exports = router;
