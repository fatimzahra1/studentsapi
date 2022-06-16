import {addNewStudent, getStudents, getStudentWithID, updateStudent, deleteStudent} from '../controllers/Student.js'

const routes = (app) => {

    //route for students
    app.route('/students')

      //get request
      .get(getStudents)

      //create post request
      .post(addNewStudent)

    // a new route so you can get these students entries by their ID's
    app.route('/students/:studentID')

    .get(getStudentWithID)

      //create put request
      .put(updateStudent)

      //create delete request
      .delete(deleteStudent)
  }

  export default routes
  
  