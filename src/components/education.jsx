import { useState } from 'react'
import EducationForm from './educationForm.jsx'
import '../styles/education.css'

function Education({education, setEducation}) {

  // const [education, setEducation] = useState([]);
  const [nextId, setNextId] = useState(1);  
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
      setIsExpanded(prev => !prev);
  }

  
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
    const newForm = { id: nextId, school: "", degree: "", date: "" }
    setEducation([...education, newForm])
    setNextId(nextId + 1);
    
  };

   function handleDelete(id) {
    const newArray = education.filter(object => object.id !== id)
    setEducation(newArray)
  };

  return (
    <>
      <div className={`eduMainContainer ${isExpanded ? 'expanded' : 'collapsed'}`}>

        <div className="eduHeaderContainer"> 
          <h3>Add Education</h3>
          <button onClick={toggleExpand}>
            <img src="assets/down.png" alt="down.png" className="expandArrow"></img>
          </button>
        </div>

        <div className={`educomponentContainer ${isExpanded ? 'expanded' : 'collapsed'}`}>
          
          {education.map((item) => (
            <EducationForm 
              key = {item.id}
              education={item} 
              onChange={handleChange}
              onDelete={handleDelete}
              parentExpanded={isExpanded}
            />
           
          ))}

        </div>

        <div className={`eduAddBtnContainer ${isExpanded ? 'expanded' : 'collapsed'}`}>
            <button className="AddButton" onClick={addEducationForm}>+</button>
        </div>

      </div>
    </>
  )
}

export default Education