const express = require('express')
const router = express.Router();
const Controller = require('../Controller/Controller')

router.post('/Teacher/add',Controller.createTeacherData);
router.get('/get/Teacher',Controller.getTeacher);
router.get('/get/specific/Teacher/:id',Controller.getSpecificTeacherData)
router.put('/put/edit/Teacher/:id',Controller.editTeacher);
router.delete('/delete/Teacher/:id',Controller.deleteTeacherDetail);


router.post('/Student/add', Controller.createStudentData);
router.get('/get/Student',Controller.getStudent);
router.get('/get/specific/Student/:id',Controller.getSpecificStudentData)
router.put('/put/edit/Student/:id',Controller.editStudent);
router.delete('/delete/Student/:id',Controller.deleteStudentDetail);



module.exports = router;