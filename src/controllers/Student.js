import mongoose from 'mongoose';
import {studentSchema}  from '../models/Student.js'

const Student = mongoose.model('students', studentSchema);

//ADD a new student
const addNewStudent =async (req,res) => {
  let newStudent =await new Student(req.body);
  newStudent.save((err, student) => {
    if (err) {
      res.send(err)
    }
res.send(student)  })
}

//GET ALL THE STUDENTS
const getStudents = (req,res) => {
  Student.find({}, (err, student) => {
    if (err) {
      res.send(err)
    }
    res.json(student)
  })
}

//GET A STUDENT BY ID
 const getStudentWithID = (req,res) => {
  Student.findById(req.params.studentID, (err, student) => {
    if (err) {
      res.send(err)
    }
    res.json(student)
  })
}

//UPDATE A STUDENT BY ID
 const updateStudent = (req,res) => {
  Student.findOneAndUpdate({ _id: req.params.studentID }, req.body, { new: true, useFindAndModify: false }, (err, student) => {
    if (err) {
      res.send(err)
    }
    res.json(student)
  })
}

//DELET A STUDENT BY ID
 const deleteStudent = (req,res) => {
  Student.deleteOne({ _id: req.params.studentID }, (err, student) => {
    if (err) {
      res.send(err)
    }
    res.json({message: "successfully deleted student"})
    })
}

export {addNewStudent, getStudents, getStudentWithID, updateStudent, deleteStudent}