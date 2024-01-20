import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateStudent from "./UpdateStudent";
import DeleteStudent from "./DeleteStudent";

export default function AllStudents() {

  const [allStudents, setStudents] = useState([]);

  useEffect(() => {
    function getStudents() {
      axios.get("http://localhost:8081/student/").then((res) => {
        setStudents(res.data);
      }).catch((err) => {
        alert(err.message);
      });
    }

    getStudents();
  }, []);

  const handleUpdateStudent = () => {
    axios.get("http://localhost:8081/student/").then((res) => {
        setStudents(res.data);
      })
  };


  return (

    <div className="container">
      <h1>All Students</h1>
      <ul>
        {allStudents && allStudents.map((student) => (
          <li key={student._id}>
            <p>ID: {student._id}</p>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Gender: {student.gender}</p>
            <UpdateStudent studentId={student._id} onUpdateStudent={handleUpdateStudent} />
            <DeleteStudent studentId={student._id} onDeleteStudent={handleUpdateStudent} />
          </li>
        ))}
      </ul>
    </div>

  );
}
