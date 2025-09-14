import { useState } from 'react'
import '../styles/education.css'

function EducationForm({education, onChange, onDelete}) {
    const [isBtnExpanded, setIsBtnExpanded] = useState(true);
    const [isFormExpanded, setIsFormExpanded] = useState(true);

    const toggleBtnExpand = () => {
        setIsBtnExpanded(!isBtnExpanded);
        setIsFormExpanded(!isFormExpanded);
    }

  return (
    <>
      
      <div className={`eduFormsectionWrapper ${isBtnExpanded ? 'expanded' : 'collapsed'}`}>

        <div class="eduHeaderContainer">
          <h3>Add Education</h3>
          <button onClick={toggleBtnExpand}>
            <img src="assets/down.png" alt="down.png" class="expandArrow"></img>
          </button>
        </div>

        <form className={`eduForm ${isFormExpanded ? 'expanded' : 'collapsed'}`}>
            <label for="school">School Name:</label>
            <input type="text" id="school" placeholder="University of..." value={education.school} onChange={(e) => onChange(education.id, "school", e.target.value)}></input>
            
            <label for="title">Title of Study:</label>
            <input type="text" id="title" placeholder="Bachelor of Arts" value={education.title} onChange={(e) => onChange(education.id, "title", e.target.value)}></input>

            <label for="date">Date of Study:</label>
            <input type="text" id="date" placeholder="2019 - 2023" value={education.date} onChange={(e) => onChange(education.id, "date", e.target.value)}></input>
        </form>

        <div className={`eduAddBtnContainer ${isFormExpanded ? 'expanded' : 'collapsed'}`}>
            <button class="AddButton" onClick={() => onDelete(education.id)}>Delete</button>
        </div>

      </div>
    </>
  )
}

export default EducationForm