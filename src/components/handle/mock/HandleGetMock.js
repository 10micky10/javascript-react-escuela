import mockData from "./../../../mock-data/mock-data-manager";

const handleGetMock = (endpoint, callback) => {
  if(endpoint.includes("no-subjects")){ 
    return callback(mockData.arrayCourses);
  }
  if(endpoint.includes("no-students")){
    return callback(mockData.arrayStudents);
  }
  //localhost:8080/api/v1/students/{id}/courses/subjects
  if(endpoint.includes("students/") && endpoint.includes("/courses/subjects")){ 
    return callback(mockData.arrayReportStudent);
  }
  //localhost:8080/api/v1/students/{id}/courses/{aux}
  if(endpoint.includes("students/") && endpoint.includes("/courses/")){ 
    return callback(mockData.arrayScore);
  }
  //localhost:8080/api/v1/students/{id}/courses
  if(endpoint.includes("students/") && endpoint.includes("/courses")){ 
    return callback(mockData.arrayReportStudentCourse);
  }
  //localhost:8080/api/v1/courses/{id}/students/subjects
  if(endpoint.includes("courses/") && endpoint.includes("/students/subjects")){ 
    return callback(mockData.arrayReportCourse);
  }
  //localhost:8080/api/v1/subjects/{id}/courses
  if(endpoint.includes("courses/") && endpoint.includes("/subjects")){ 
    return callback(mockData.arrayCoursesSubjectsJoin);
  }
  //localhost:8080/api/v1/courses/{aux}/students/{id}
  if(endpoint.includes("courses/") && endpoint.includes("/students/")){ 
    return callback(mockData.arrayScore);
  }
  //localhost:8080/api/v1/courses/{id}/students
  if(endpoint.includes("courses/") && endpoint.includes("/students")){ 
    return callback(mockData.arrayCoursesStudentsJoin);
  }

  switch(endpoint) {
    case "users/":
      callback(mockData.arrayUsers);
      break;
    case "students/":
      callback(mockData.arrayStudents);
      break;
    case "courses/":
        callback(mockData.arrayCourses);
      break;
    case "subjects/":
        callback(mockData.arraySubjects);
    break;
    default:
      callback(mockData.arrayUsers);
  }
};

export default handleGetMock;
