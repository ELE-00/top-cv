//certificationsForm.jsx

import { useState } from 'react'
import '../styles/skills.css'

function CertificationsForm({certifications, onChange, onDelete, parentExpanded}) {
    const [childExpanded, setChildExpanded] = useState(true);
    const isVisible = parentExpanded && childExpanded;

    const toggleBtnExpand = () => {
        setChildExpanded(prev => !prev);
    }
    
  return (
    <>
      
      <div className={`certFormsectionWrapper ${isVisible ? 'expanded' : 'collapsed'}`}>

        <div className="certHeaderContainer">
          <h3>{certifications.certification}</h3>
          <button onClick={toggleBtnExpand}>
            <img src="assets/down.png" alt="down.png" className="expandArrow"></img>
          </button>
        </div>

        <form className={`certForm ${isVisible ? 'expanded' : 'collapsed'}`}>
            <label for="certification">Certification:</label>
            <input type="text" id="certification" placeholder="Name" value={certifications.certification} onChange={(e) => onChange(certifications.id, "school", e.target.value)}></input>
            
        </form>

        <div className={`certAddBtnContainer ${isVisible ? 'expanded' : 'collapsed'}`}>
            <button className="deleteBtn" onClick={() => onDelete(certifications.id)}>Delete</button>
        </div>

      </div>
    </>
  )
}

export default CertificationsForm