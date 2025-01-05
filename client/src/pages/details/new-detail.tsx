import { useState} from "react";
// import api from "../api";


import { useCreatePatientRecordMutation } from  "../../store/api";

import "../../assets/styles/detail.css"


function NewDetails() {
  
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");


  
  
  
    const [createPatientRecord,{isLoading, isSuccess}] = useCreatePatientRecordMutation();



    const createNote = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        console.log('creating')
        createPatientRecord({title, content})
       
    };

    if(isLoading){
        return <p>Loading ....</p>
    }


    
  

    return (
        <div>
            <div>
                <h2>new patient records</h2>     
                {isSuccess? <p> successfull created a new record</p>: null}       
               
            </div>
            <h2>Create a  PatientRecord </h2>
            <form onSubmit={createNote}>
                <label htmlFor="title">Title:</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="content">Content:</label>
                <br />
                <textarea
                    id="content"
                    name="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default NewDetails;