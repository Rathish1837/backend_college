const Service = require('../Service/Service')
// create Teacher
const createTeacherData = async(req,res)=>{
    const valueData = await Service.createTeacherData(req.body);
    res.send(valueData)

}

//GET Teacher details
const getTeacher = async(req,res)=>{
    const getDataTeacher = await Service.getDataTeacher();
    res.send(getDataTeacher)

}

// GET Specific Teacher details

const getSpecificTeacherData = async(req,res)=>{
    const getData = await Service.getSpecificTeacherData1(req.params.id);
    res.send(getData)

}




// Update (PUT) Teacher details

const editTeacher = async(req,res)=>{
    const edit = await Service.updateTeacher(req.params.id,req.body);
    res.send(edit)
}

// Delete Method

const deleteTeacherDetail = async(req,res)=>{
    const delData = await Service.deleteTeacherData(req.params.id);
    res.send(delData)

}



// create Student
const createStudentData = async(req,res)=>{
    const valueData = await Service.createStudentData(req.body);
    res.send(valueData)

}
//GET Student details
const getStudent = async(req,res)=>{
    const getDataStudent = await Service.getDataStudent();
    res.send(getDataStudent)
}
// GET Specific Student details

const getSpecificStudentData = async(req,res)=>{
    const getData = await Service.getSpecificStudentData1(req.params.id);
    res.send(getData)

}
// Update (PUT) Student details

const editStudent = async(req,res)=>{
    const edit = await Service.updateStudent(req.params.id,req.body);
    res.send(edit)
}

// Delete Method

const deleteStudentDetail = async(req,res)=>{
    const delData = await Service.deleteStudentData(req.params.id);
    res.send(delData)

}




module.exports = {
    createTeacherData,
    createStudentData,
    getTeacher,
    editTeacher,
    deleteTeacherDetail,
    getSpecificTeacherData,
    getStudent,
    getSpecificStudentData,
    editStudent,
    deleteStudentDetail
}