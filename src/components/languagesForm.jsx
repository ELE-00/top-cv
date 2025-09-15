//languageForm.jsx

import { useState } from 'react'
import '../styles/skills.css'

function LanguagesForm({languages, onChange, onDelete, parentExpanded}) {
    const [childExpanded, setChildExpanded] = useState(true);
    const isVisible = parentExpanded && childExpanded;

    const toggleBtnExpand = () => {
        setChildExpanded(prev => !prev);
    }

  return (
    <>
      
      <div className={`langFormsectionWrapper ${isVisible ? 'expanded' : 'collapsed'}`}>

        <div className="langHeaderContainer">
          <h3>{languages.language}</h3>
          <button onClick={toggleBtnExpand}>
            <img src="assets/down.png" alt="down.png" className="expandArrow"></img>
          </button>
        </div>

        <form className={`langForm ${isVisible ? 'expanded' : 'collapsed'}`}>
            <label for="language">Language:</label>
            <input type="text" id="language" placeholder="Name" value={languages.language} onChange={(e) => onChange(languages.id, "school", e.target.value)}></input>
            
        </form>

        <div className={`langAddBtnContainer ${isVisible ? 'expanded' : 'collapsed'}`}>
            <button className="deleteBtn" onClick={() => onDelete(languages.id)}>Delete</button>
        </div>

      </div>
    </>
  )
}

export default LanguagesForm