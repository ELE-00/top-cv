import { useState } from 'react'
import './App.css'
import BasicInfo from './components/basicInfo.jsx'
import Education from './components/education.jsx'
import Work from './components/work.jsx'

function App() {
  
  const [basicInfo, setBasicInfo] = useState({
    name: "",
    email: "",
    phone: "",
    github: "",
    linkedin: ""
  });


  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);


  const BIhandleChange = (e) => {
    const {id, value} = e.target;
    setBasicInfo(prev => ({...prev, [id]: value}))
  };



  return (
    <>
    <div class="mainWrapper">
      <div class="leftWrapper">
        <BasicInfo basicInfo={basicInfo} onChange={BIhandleChange}/>
        <Education education={education} setEducation={setEducation}/>
        <Work work={work} setWork={setWork}/>
      </div>

      <div class="rightWrapper">
        <h3>{basicInfo.name}</h3>
        <h3>{basicInfo.email}</h3>
        <h3>{basicInfo.phone}</h3>
        <h3>{basicInfo.github}</h3>
        <h3>{basicInfo.linkedin}</h3>

        {education.map((item) => (
          <div key = {item.id}>
            <h3>{item.school}</h3>
            <h3>{item.title}</h3>
            <h3>{item.date}</h3>
          </div>         
        ))}

        {work.map((item) => (
          <div key={item.id}>
            <h3>{item.company}</h3>
            <h3>{item.position}</h3>
            <h3>{item.description}</h3>
            <h3>{item.fromDate}</h3>
            <h3>{item.untilDate}</h3>
          </div>
        ))}


      </div>
    </div>

    </>
  )
}

export default App
