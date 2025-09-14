import { useState } from 'react'
import EducationForm from './educationForm.jsx'
import '../styles/education.css'

function Education({education, setEducation}) {

  // const [education, setEducation] = useState([]);
  const [nextId, setNextId] = useState(1);


  
   function handleChange(id, field, value) {

    const newArray = education.map(object => {
      if(object.id == id){
        return {...object, [field]: value }
      } else {
        return object
      }
    })

    setEducation(newArray)
  };

  function addEducationForm() {
    const newForm = { id: nextId, school: "", title: "", date: "" }
    setEducation([...education, newForm])
    setNextId(nextId + 1);
    
  };

   function handleDelete(id) {
    const newArray = education.filter(object => object.id !== id)
    setEducation(newArray)
  };

  return (
    <>
      <div className="mainContainer">

        <div className="eduHeaderContainer"> 
          <h3>Add Education</h3>
          <button>
            <img src="assets/down.png" alt="down.png" className="expandArrow"></img>
          </button>
        </div>

        <div className="componentContainer">
          
          {education.map((item) => (
            <EducationForm 
              key = {item.id}
              education={item} 
              onChange={handleChange}
              onDelete={handleDelete}
            />
           
          ))}

        </div>

        <div className="buttonContainer">
            <button className="AddButton" onClick={addEducationForm}>+</button>
        </div>

      </div>
    </>
  )
}

export default Education