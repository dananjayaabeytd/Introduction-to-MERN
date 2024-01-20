import React, { useState } from "react";
import axios from "axios";


const UpdateStudent = ({ studentId, onUpdateStudent }) => {

  const [updatedName, setUpdatedName] = useState("");
  const [updatedAge, setUpdatedAge] = useState("");
  const [updatedGender, setUpdatedGender] = useState("");

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8081/student/update/${studentId}`, {
        name: updatedName,
        age: updatedAge,
        gender: updatedGender,
      });

      setUpdatedName("");
      setUpdatedAge("");
      setUpdatedGender("");

      onUpdateStudent();

      alert("Student details updated successfully!");
    } catch (error) {
      console.error("Error updating student details:", error.message);
      alert("Error updating student details. Please try again.");
    }
  };

  return (
    <div className="update-form-container">
      <h2>Update Student Details</h2>
      <form className="update-form">
        <label>
          Name:
          <input type="text" className="update-input" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" className="update-input" value={updatedAge} onChange={(e) => setUpdatedAge(e.target.value)} />
        </label>
        <br />
        <label>
          Gender:
          <input type="text" className="update-input" value={updatedGender} onChange={(e) => setUpdatedGender(e.target.value)} />
        </label>
        <br />
        <button type="button" className="update-btn" onClick={handleUpdate}>Update</button>
        
      </form>
    </div>
  );

};

export default UpdateStudent;
