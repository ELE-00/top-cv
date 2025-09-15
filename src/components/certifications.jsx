//certifications.jsx

import { useState } from 'react'
import CertificationsForm from './certificationsForm.jsx'
import '../styles/skills.css'

function Certifications({certifications, setCertifications}) {

  const [nextId, setNextId] = useState(1);
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
      setIsExpanded(prev => !prev);
  }


  
   function handleChange(id, field, value) {

    const newArray = certifications.map(object => {
      if(object.id == id){
        return {...object, [field]: value }
      } else {
        return object
      }
    })

    setCertifications(newArray)
  };

  function addCertificationForm() {
    const newForm = { id: nextId, certification: ""}
    setCertifications([...certifications, newForm])
    setNextId(nextId + 1);
    
  };

   function handleDelete(id) {
    const newArray = certifications.filter(object => object.id !== id)
    setCertifications(newArray)
  };

  return (
    <>
      <div className={`certMainContainer ${isExpanded ? 'expanded' : 'collapsed'}`}>

        <div className="certHeaderContainer"> 
          <h3>Add Certification</h3>
          <button onClick={toggleExpand}>
            <img src="assets/down.png" alt="down.png" className="expandArrow"></img>
          </button>
        </div>

        <div className={`certcomponentContainer ${isExpanded ? 'expanded' : 'collapsed'}`}>
          
          {certifications.map((item) => (
            <CertificationsForm 
              key = {item.id}
              certifications={item} 
              onChange={handleChange}
              onDelete={handleDelete}
              parentExpanded={isExpanded}
            />
           
          ))}

        </div>

        <div className={`certAddBtnContainer ${isExpanded ? 'expanded' : 'collapsed'}`}>
            <button className="AddButton" onClick={addCertificationForm}>+</button>
        </div>

      </div>
    </>
  )
}

export default Certifications