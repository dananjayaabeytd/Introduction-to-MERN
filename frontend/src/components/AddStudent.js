import React, { useState } from "react"
import axios from "axios"

export default function AddStudent(){

    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [gender,setGender] = useState("");

    function sendDate(e){
        e.preventDefault();
        
        const newStudent = {
            name,
            age,
            gender
        }

        axios.post("http://localhost:8081/student/add",newStudent).then(()=>{
            
            alert("Student Added")
            setName("")
            setAge("")
            setGender("")

        }).catch((err)=>{
            alert(err)
        })
    }
    


    return(

        <div className="container">

            <form onSubmit={sendDate}>
                <div className="form-group">
                    <label for="name">Student Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Student name" 
                    onChange={(e)=>{

                        setName(e.target.value);
                        console.log(name)

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="age">Student age</label>
                    <input type="text" className="form-control" id="age" placeholder="Enter Student age"  
                    onChange={(e)=>{

                        setAge(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="name">Student gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Enter Student gender"  
                    onChange={(e)=>{

                        setGender(e.target.value);

                    }}></input>
                </div>
                
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}