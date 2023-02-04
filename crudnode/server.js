const express = require('express');
const bodyParser = require('body-parser')
const mysql      = require('mysql');
const app = express();
app.use(bodyParser.json);
app.use(express.json());

//Establish the database connection

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbschool",
});

//Checking the database connection
// db.connect(function (error) {
//     if (error) {
//       console.log("Error connecting to DB");
//     } else {
//       console.log("Successfully connected to DB");
//     }
//   });

  app.get("/", (req,res) => {
    res.json("Hello World");
  })
//Establish the Port
// app.listen(8085,function check(error) {
//     if (error)
//     {
//     console.log("Error...!!!!");
//     }
//     else
//     {
//         console.log("Started....!!!! 8085");
//     }
// });

app.listen(8085, ()=>{
  console.log("Connected successfully!!");
})

//Create the Records
app.post("/Studentdetails/Student/add", (req, res) => {
    let details = {
      stname: req.body.stname,
      course: req.body.course,
      fee: req.body.fee,
    };
    let sql = "INSERT INTO student SET ?";
    db.query(sql, details, (error) => {
      if (error) {
        res.send({ status: false, message: "Student created Failed" });
      } else {
        res.send({ status: true, message: "Student created successfully" });
      }
    });
  });


  
//view the Records
 
app.get("/Studentdetails/Student", (req, res) => {
  var sql = "SELECT * FROM student";
  db.query(sql, function (error, result) {
    if (error) {
      console.log("Error Connecting to DB");
    } else {
      res.send({ status: true, data: result });
    }
  });
});


//Search the Records
 
app.get("/Studentdetails/Student/:id", (req, res) => {
  var studentid = req.params.id;
  var sql = "SELECT * FROM student WHERE id=" + studentid;
  db.query(sql, function (error, result) {
    if (error) {
      console.log("Error Connecting to DB");
    } else {
      res.send({ status: true, data: result });
    }
  });
});


//Update the Records
 
app.put("/Studentdetails/Student/update/:id", (req, res) => {
  let sql =
    "UPDATE student SET stname='" +
    req.body.stname +
    "', course='" +
    req.body.course +
    "',fee='" +
    req.body.fee +
    "'  WHERE id=" +
    req.params.id;

  let a = db.query(sql, (error, result) => {
    if (error) {
      res.send({ status: false, message: "Student Updated Failed" });
    } else {
      res.send({ status: true, message: "Student Updated successfully" });
    }
  });
});


  //Delete the Records
 
  app.delete("/Studentdetails/Student/delete/:id", (req, res) => {
    let sql = "DELETE FROM student WHERE id=" + req.params.id + "";
    let query = db.query(sql, (error) => {
      if (error) {
        res.send({ status: false, message: "Student Deleted Failed" });
      } else {
        res.send({ status: true, message: "Student Deleted successfully" });
      }
    });
  });
