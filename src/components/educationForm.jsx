import { useState } from 'react'
import '../styles/education.css'

function EducationForm({education, onChange, onDelete, parentExpanded}) {
    const [childExpanded, setChildExpanded] = useState(true);
    const isVisible = parentExpanded && childExpanded;

    const toggleBtnExpand = () => {
        setChildExpanded(prev => !prev);
    }
    

  return (
    <>
      
      <div className={`eduFormsectionWrapper ${isVisible ? 'expanded' : 'collapsed'}`}>

        <div className="eduHeaderContainer">
          <h3>Add Education</h3>
          <button onClick={toggleBtnExpand}>
            <img src="assets/down.png" alt="down.png" className="expandArrow"></img>
          </button>
        </div>

        <form className={`eduForm ${isVisible ? 'expanded' : 'collapsed'}`}>
            <label for="school">School Name:</label>
            <input type="text" id="school" placeholder="University of..." value={education.school} onChange={(e) => onChange(education.id, "school", e.target.value)}></input>
            
            <label for="degree">Title of Study:</label>
            <input type="text" id="degree" placeholder="Bachelor of Arts" value={education.degree} onChange={(e) => onChange(education.id, "title", e.target.value)}></input>

            <label for="date">Date of Study:</label>
            <input type="text" id="date" placeholder="2019 - 2023" value={education.date} onChange={(e) => onChange(education.id, "date", e.target.value)}></input>
            
        </form>

        <div className={`eduAddBtnContainer ${isVisible ? 'expanded' : 'collapsed'}`}>
            <button className="deleteBtn" onClick={() => onDelete(education.id)}>Delete</button>
        </div>

      </div>
    </>
  )
}

export default EducationForm