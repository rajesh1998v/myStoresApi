var express = require("express");
var app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );  
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});
const port= 2450;
 
customers = [
  {
    custId: 1,
    name: "ABC",
    password: "abc1234",
    role: "admin",
    email: "abc@gmail.com"
  },
  {
    custId: 2,
    name: "Willie",
    password: "willie1234",
    role: "student",
    email: "willie@gmail.com"
  },
  {
    custId: 3,
    name: "Jack",
    password: "jack1234",
    role: "faculty",
    email: "jack@gmail.com"
  },
  {
    custId: 4,
    name: "James",
    password: "james1234",
    role: "student",
    email: "james@gmail.com"
  },
  {
    custId: 5,
    name: "Harry",
    password: "harry1234",
    role: "faculty",
    email: "harry@gmail.com"
  },
  {
    custId: 6,
    name: "Tia",
    password: "tia1234",
    role: "student",
    email: "tia@gmail.com"
  },
  {
    custId: 7,
    name: "Aditya",
    password: "aditya123",
    role: "faculty",
    email: "aditya@gmail.com"
  },
  {
    custId: 8,
    name: "Sonu",
    password: "sonu1234",
    role: "student",
    email: "sonu@gmail.com"
  },
  {
    custId: 9,
    name: "Ellie",
    password: "ellie1234",
    role: "student",
    email: "ellie@gmail.com"
  },
  {
    custId: 10,
    name: "Gia",
    password: "gia1234",
    role: "faculty",
    email: "gia@gmail.com"
  }
];
courses = [
  {
    courseId: 1,
    name: "ANGULAR",
    code: "ANG97",
    description: "All fundamentals of Angular 7",
    faculty: ["Daniel", "Jack"],
    students: ["Sam"]
  },
  {
    courseId: 2,
    name: "JAVASCRIPT",
    code: "JS124",
    description: "Intoduction to javascript",
    faculty: ["Aditya"],
    students: ["James", "Joy", "Monu", "Rita"]
  },
  {
    courseId: 3,
    name: "REACT",
    code: "RCT56",
    description: "React Javascript library",
    faculty: ["Jack", "Gia"],
    students: ["Raima", "Rita", "Sonu", "James"]
  },
  {
    courseId: 4,
    name: "BOOTSTRAP",
    code: "BS297",
    description: "Bootstrap Designing Framework",
    faculty: [],
    students: ["James", "Tia", "Ellie"]
  },
  {
    courseId: 5,
    name: "CSS",
    code: "CS365",
    description: "Basic stylesheet language",
    faculty: [],
    students: ["James", "Rita", "Monica"]
  },
  {
    courseId: 6,
    name: "REST AND MICROSERVICES",
    code: "RM392",
    description: "Introduction to Microservices",
    faculty: [],
    students: ["Sam"]
  },
  {
    courseId: 7,
    name: "NODE",
    code: "ND725",
    description: "Introduction to Node",
    faculty: ["Sonia"],
    students: ["Saransh", "Shrey", "Monica"]
  }
];
faculties = [
  { id: 5, name: "Daniel", courses: ["ANGULAR"] },
  { id: 4, name: "Sonia", courses: ["NODE"] },
  { id: 3, name: "Jack", courses: ["REACT", "ANGULAR"] },
  { id: 2, name: "Gia", courses: ["REACT"] },
  { id: 1, name: "Aditya", courses: ["ANGULAR"] }
];
classes = [
  {
    classId: 1,
    course: "REACT",
    time: "07:45",
    endTime: "08:45",
    topic: "Redux",
    facultyName: "Jack"
  },
  {
    classId: 2,
    course: "ANGULAR",
    time: "15:45",
    endTime: "17:40",
    topic: "Component",
    facultyName: "Jack"
  },
  {
    classId: 3,
    course: "JAVASCRIPT",
    time: "15:45",
    endTime: "17:40",
    topic: "Component",
    facultyName: "Aditya"
  }
];
students = [
  {
    id: 16,
    name: "Willie",
    dob: "31-July-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["ANGULAR", "NODE"]
  },
  {
    id: 15,
    name: "Tia",
    dob: "30-July-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: []
  },
  {
    id: 14,
    name: "Apoorv",
    dob: "31-August-1998",
    gender: "male",
    about: "Want to learn new technologies",
    courses: []
  },
  {
    id: 13,
    name: "Joy",
    dob: "31-July-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT"]
  },
  {
    id: 12,
    name: "Rachel",
    dob: "31-August-1998",
    gender: "female",
    about: "Pursuing Graduation",
    courses: []
  },
  {
    id: 11,
    name: "Monica",
    dob: "30-July-1997",
    gender: "female",
    about: "Want to learn new technologies",
    courses: ["CSS", "NODE"]
  },
  {
    id: 10,
    name: "Monu",
    dob: "12-May-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT"]
  },
  {
    id: 9,
    name: "Sonu",
    dob: "12-May-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["REACT"]
  },
  {
    id: 8,
    name: "Raima",
    dob: "30-July-1997",
    gender: "female",
    about: "Want to learn new technologies",
    courses: ["REACT"]
  },
  {
    id: 7,
    name: "Rita",
    dob: "31-August-1998",
    gender: "female",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT", "REACT", "CSS"]
  },
  {
    id: 6,
    name: "Shrey",
    dob: "12-May-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["NODE"]
  },
  {
    id: 5,
    name: "Saransh",
    dob: "31-July-1997",
    gender: "male",
    about: "Want to learn new technologies",
    courses: ["NODE"]
  },
  {
    id: 4,
    name: "Sanya",
    dob: "31-July-1997",
    gender: "male",
    about: "Want to learn new technologies",
    courses: []
  },
  {
    id: 3,
    name: "James",
    dob: "12-July-1994",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT", "BOOTSTRAP", "CSS", "REACT"]
  },
  {
    id: 2,
    name: "Sam",
    dob: "12-July-1994",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["ANGULAR", "REST AND MICROSERVICES"]
  },
  {
    id: 1,
    name: "Ellie",
    dob: "12-June-1992",
    gender: "female",
    about: "Want to learn new technologies",
    courses: ["BOOTSTRAP"]
  }
];

app.post("/register", function(req, res) {
  let maxid = customers.reduce((acc,curr)=>(curr.custId >acc ? curr.custId:acc),0);
  let newId = maxid+1;
  role=req.body.role;
  const cust = {
    custId:newId,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: role,
  };
  customers.unshift(cust);
  if(role==="student"){
    let mid = students.reduce((acc,curr)=>(curr.id >acc ? curr.id:acc),0);
    let nId = mid+1;
    let newStudent={id:nId,name:req.body.name,courses:[]}
    students.unshift(newStudent);
  }else if(role==="faculty"){
    let mid = faculties.reduce((acc,curr)=>(curr.id >acc ? curr.id:acc),0);
    let nId = mid+1;
    let newFaculty={id:nId,name:req.body.name,courses:[]}
    faculties.unshift(newFaculty);
  }
  var customerRes= {
    name: req.body.name,
    role: req.body.role,
    email: req.body.email,
  }
  res.send(customerRes);
});

app.post("/login", function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  var cust = customers.find(function(item) {
    return item.email === email && item.password === password;
  });
  // console.log(cust);
  if(cust){
    var custRec= {
      name: cust.name,
      email:cust.email,
      role: cust.role
    }
    res.send(custRec);
  } else res.status(500).send("Not Found");
  
  //if null then send error
 
});

app.get("/getStudentNames", function(req, res) {
  let names = students.map(s1=>{
    return s1.name;
  })
  res.send(names);
 
});

app.get("/getFacultyNames", function(req, res) {
  let arr = faculties.map(s1=>{
    return s1.name;
  })
  res.send(arr);
 
 
});

app.get("/getCourses", function(req, res) {
  let arr = courses
  res.send(arr);

});

app.get("/getCourseName", function(req, res) {
  let arr = courses.map(c1=>{
    return c1.name;
  })
  res.send(arr);

});
app.get("/getCourseName/:name", function(req, res) {
  let name = req.params.name;
  let course = courses.find(c1=>c1.name===name)
  res.send(course);
});

app.put("/putCourse",function(req,res){
  let courseId = req.body.courseId;
  let name= req.body.name;
  let course={
      courseId: courseId,
      name: req.body.name,
      code: req.body.code,
      description: req.body.description,
      faculty: req.body.faculty,
      students: req.body.students,
  }
  let student = req.body.students;
    student.map((s1=>{
      let st= students.find(s2=>s2.name===s1);
      let index = st.courses.findIndex(c1=>c1===name);
      if(index<0){
        st.courses.unshift(name);
      }
    }));
    let arr = students.filter(s1=>{
      return s1.courses.find(c1=>c1===name);
    });
// console.log(arr);
    arr.map(c1=>{
      let st = students.find(d1=>d1.id===c1.id);
      let index = student.findIndex(s1=>s1==st.name);
      if(index<0){
        let index = st.courses.findIndex(c=>c===name);
        st.courses.splice(index,1);
      }
    });

    let faculty= req.body.faculty;
    faculty.map((s1=>{
      let st= faculties.find(s2=>s2.name===s1);
      let index = st.courses.findIndex(c1=>c1===name);
      if(index<0){
        st.courses.unshift(name);
      }
    }));
    let arr1 = faculties.filter(s1=>{
      return s1.courses.find(c1=>c1===name);
    });
   
    arr1.map(c1=>{
      let st = faculties.find(d1=>d1.id===c1.id);
      let index = faculty.findIndex(s1=>s1==st.name);
      if(index<0){
        let index = st.courses.findIndex(c=>c===name);
        st.courses.splice(index,1);
      }
    });

  let index = courses.findIndex(c1=>c1.courseId===courseId);
  if(index>=0){
      let updatecourse= course;
      courses[index] = updatecourse;
      res.send(updatecourse);
  }
  else  res.status(500).send("No courser found");
 
});

app.get("/getStudents", function(req, res) {
  list = students;
  let course = req.query.course;
  if(course){
    let arr1 = course.split(",");
    list = list.filter((e1)=>arr1.find(m1=>e1.courses.find(c1=>c1==m1)));
  }
  let resArr = pagination(list, parseInt(req.query.page));
  res.json({
    page: parseInt(req.query.page),
    items: resArr,
    totalItems: resArr.length,
    totalNum: list.length
  });
});


app.get("/getFaculties", function(req, res) {
  
  list = faculties;
  let course = req.query.course;

  if(course){
    let arr1 = course.split(",");
    list = list.filter((e1)=>arr1.find(m1=>e1.courses.find(c1=>c1==m1)));
  }
  let resArr = pagination(list, parseInt(req.query.page));
  res.json({
    page: parseInt(req.query.page),
    items: resArr,
    totalItems: resArr.length,
    totalNum: list.length
  });
});

app.post("/postStudentDetails",function(req,res){

  let id = req.body.id;
  let body = req.body;
  let index = students.findIndex(c1=>c1.id==id);
    if(index>=0){
        let updateStudent= {...body};
        students[index] = updateStudent;
        res.send(updateStudent);
    }
    else  res.status(404).send("No products found");
});

app.get("/getStudentDetails/:name",function(req,res){
  let name = req.params.name;
  let student = students.find(s1=>s1.name==name);
  if(student)
  res.send(student);
  else
  res.status(500).send("not Found");
});

app.get("/getStudentCourse/:name",function(req,res){
  let name = req.params.name;
  let student = courses.filter(s1=>s1.students.find(s1=>s1==name));
  res.send(student);
  
});

app.get("/getStudentClass/:name",function(req,res){
  let name = req.params.name;
  let student = students.find(s1=>s1.name===name);
  let classe = classes.filter(c1=>student.courses.find(s1=>s1==c1.course));
  res.send(classe);
  
});

app.get("/getStudentClasses/:name",function(req,res){
  let name = req.params.name;
  let st = students.find(s1=>s1.name===name);
  let student = classes.filter(s1=>st.courses.find(c1=>c1==s1.course));
  res.send(student);
  
});

app.get("/getFacultyCourse/:name",function(req,res){
  let name = req.params.name;
  let faculty = courses.filter(s1=>s1.faculty.find(s1=>s1==name));
  res.send(faculty);
  
});

app.get("/getFacultyClass/:name",function(req,res){
  let name = req.params.name;
  let st = faculties.find(s1=>s1.name==name);
  let faculty = classes.filter(s1=>st.courses.find(c1=>c1==s1.course));
  res.send(faculty);
  
});
// --.

app.post("/postClass",function(req,res){
  let body = req.body;
  let maxid = classes.reduce((acc,curr)=>(curr.classId >acc ? curr.classId:acc),0);
  let newId = maxid+1;
  let newclass={classId:newId,...body}
  classes.push(newclass);
  res.send(newclass);

});

app.get("/getClass/:id",function(req,res){
  let id = req.params.id;
  let class1 = classes.find(s1=>s1.classId==id);
  res.send(class1);
  
});


app.put("/postClass/:classId",function(req,res){
  let classId = req.params.classId
  let body = req.body;
  let index = classes.findIndex(c1=>c1.classId==classId);
  if(index>=0){
      let updateClass= {...body};
      classes[index] = updateClass;
      res.send(updateClass);
  }
  else  res.status(404).send("No products found");
});




function pagination(obj, page) {
  const postCount = obj.length;
  const perPage = 10;
  // const pageCount = Math.ceil(postCount / perPage);
  var resArr = obj;
  resArr = resArr.slice(page * 3 - 3, page * 3);
  return resArr;
}


app.listen(port, () => console.log(`Node app listening on port ${port}`));