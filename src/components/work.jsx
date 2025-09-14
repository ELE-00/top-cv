import { useState } from 'react'
import WorkForm from './workForm.jsx'
import '../styles/work.css'



function Work({work, setWork}) {

  const [nextWorkId, setNextWorkId] = useState(1);


  function handleAddWork(){
    const newForm = {id: nextWorkId, company: "", title: "", description: "", fromDate: "", untilDate: ""}
    setWork([...work, newForm])
    setNextWorkId(nextWorkId + 1)
  };

  function handleChangeWork(id, field, value){
    const newArray = work.map(object => {
      if(object.id == id){
        return {...object, [field]: value } 

      } else {
        return object
      }
    });

    setWork(newArray)
  };


  function handleDeleteWork(id){
    const newArray = work.filter(object => object.id !== id)
    setWork(newArray)
  };


  return (
    <>
    
    <div className="workMainContainer">

      <div className="workFormHeaderContainer">
          <h3>Work Experience</h3>
          <button>
              <img src="assets/down.png" alt="down.png" className="expandArrow"></img>
          </button>
      </div>


      <div className="componentContainer">
        {work.map((item) => (
          <WorkForm 
            key = {item.id}
            work = {item}
            onChange = {handleChangeWork}
            onDelete = {handleDeleteWork}
          />
        ))}
      </div>

      <div className="buttonContainer">
        <button className="AddButton" onClick={handleAddWork}>+</button>
      </div>
    </div>
    </>
  )
}

export default Work
