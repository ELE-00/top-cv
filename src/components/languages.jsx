//languages.jsx

import { useState } from 'react'
import LanguagesForm from './languagesForm.jsx'
import '../styles/skills.css'

function Languages({languages, setLanguages}) {

  const [nextId, setNextId] = useState(1);
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
      setIsExpanded(prev => !prev);
  }

  
   function handleChange(id, field, value) {

    const newArray = languages.map(object => {
      if(object.id == id){
        return {...object, [field]: value }
      } else {
        return object
      }
    })

    setLanguages(newArray)
  };

  function addLanguageForm() {
    const newForm = { id: nextId, language: ""}
    setLanguages([...languages, newForm])
    setNextId(nextId + 1);
    
  };

   function handleDelete(id) {
    const newArray = languages.filter(object => object.id !== id)
    setLanguages(newArray)
  };

  return (
    <>
      <div className={`langMainContainer ${isExpanded ? 'expanded' : 'collapsed'}`}>

        <div className="langHeaderContainer"> 
          <h3>Add Languages:</h3>
          <button onClick={toggleExpand}>
            <img src="assets/down.png" alt="down.png" className="expandArrow"></img>
          </button>
        </div>

        <div className={`langcomponentContainer ${isExpanded ? 'expanded' : 'collapsed'}`}>
          
          {languages.map((item) => (
            <LanguagesForm 
              key = {item.id}
              languages={item} 
              onChange={handleChange}
              onDelete={handleDelete}
              parentExpanded={isExpanded}
            />
           
          ))}

        </div>

        <div className={`langAddBtnContainer ${isExpanded ? 'expanded' : 'collapsed'}`}>
            <button className="AddButton" onClick={addLanguageForm}>+</button>
        </div>

      </div>
    </>
  )
}

export default Languages