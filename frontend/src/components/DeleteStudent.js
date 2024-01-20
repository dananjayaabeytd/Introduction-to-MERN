import React from "react";
import axios from "axios";

const DeleteStudent = ({ studentId, onDeleteStudent }) => {

  const handleDelete = async () => {
    try {

      await axios.delete(`http://localhost:8081/student/delete/${studentId}`);
      onDeleteStudent();
      alert("Student deleted successfully!");

    } catch (error) {

      console.error("Error deleting student:", error.message);
      alert("Error deleting student. Please try again.");

    }

  };


  return (

    <div>
      <button type="button" className="update-btn" onClick={handleDelete}>Delete</button>
    </div>
    
  );


};

export default DeleteStudent;
