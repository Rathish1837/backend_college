const teacherModel = require('../Model/Teacher')
const studentModel = require('../Model/Student')

// Create Teacher data
const createTeacherData = async(userBody)=>{
    const datas = await teacherModel.create(userBody);
    return datas;
}

// GET Teacher data
const getDataTeacher = async()=>{

    const valueTeacher = await teacherModel.aggregate([
        {
            $match: {
                $and:[{active: {$eq: true}}]
            }
        }
    ]);

    return valueTeacher;
}

// GET Specific Teacher data

const getSpecificTeacherData1 = async(id)=>{
    
    const getData = await teacherModel.aggregate([
        {
            $match: {
                $and: [{_id:id},{active:{ $eq: true}}]
            }
    }
    ]);
    return getData

}


//PUT (update) Teacher data
const updateTeacher = async(id,body)=>{
    const checkId = await teacherModel.findById(id);
    if(!checkId){
        console.log("not found")
    }
    const isPresent = await teacherModel.findByIdAndUpdate({_id:id},body,{new:true});
    return isPresent;
}

// Delete Teacher data
const deleteTeacherData = async(id)=>{
    
    const delPresent = await teacherModel.findOneAndDelete(id);
    return delPresent;
}   

// Create Student data
const createStudentData = async(userBody)=>{
    const datas = await studentModel.create(userBody);
    return datas;
}


// GET Student data
const getDataStudent = async()=>{

    const valueStudent = await studentModel.aggregate([
        {
            $match: {
                $and:[{active: {$eq: true}}]
            }
        }
    ]);

    return valueStudent;
}

// GET Specific Teacher data

const getSpecificStudentData1 = async(id)=>{
    
    const getData = await studentModel.aggregate([
        {
            $match: {
                $and: [{_id:id},{active:{ $eq: true}}]
            }
    }
    ]);
    return getData

}
 //PUT (update) Teacher data
const updateStudent = async(id,body)=>{
    const checkId = await studentModel.findById(id);
    if(!checkId){
        console.log("not found")
    }
    const isPresent = await studentModel.findByIdAndUpdate({_id:id},body,{new:true});
    return isPresent;
}

// Delete Teacher data
const deleteStudentData = async(id)=>{
    
    const delPresent = await studentModel.findOneAndDelete(id);
    return delPresent;
}    


module.exports={
    createTeacherData,
    createStudentData,
    getDataTeacher,
    updateTeacher,
    deleteTeacherData,
    getSpecificTeacherData1,
    getDataStudent,
    getSpecificStudentData1,
    updateStudent,
    deleteStudentData
}