import { useState } from 'react'
import './App.css'
import BasicInfo from './components/basicInfo.jsx'
import Education from './components/education.jsx'
import Work from './components/work.jsx'
import Certifications from './components/certifications.jsx'
import Languages from './components/languages.jsx'
import defaultData from './components/defaultData.jsx'

function App() {
  
  // const [basicInfo, setBasicInfo] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   github: "",
  //   linkedin: "",
  //   summary: ""
  // });

  // const [education, setEducation] = useState([]);
  // const [work, setWork] = useState([]);

  const [basicInfo, setBasicInfo] = useState(defaultData.basicInfo);
  const [work, setWork] = useState(defaultData.work);
  const [certifications, setCertifications] = useState(defaultData.certifications);
  const [languages, setLanguages] = useState(defaultData.languages);
  const [education, setEducation] = useState(defaultData.education);




  const BIhandleChange = (e) => {
    const {id, value} = e.target;
    setBasicInfo(prev => ({...prev, [id]: value}))
  };


  return (
    <>
    <div class="mainWrapper">
      <div class="leftWrapper">
        <BasicInfo basicInfo={basicInfo} onChange={BIhandleChange}/>
        <Work work={work} setWork={setWork}/>     
        <Certifications certifications={certifications} setCertifications={setCertifications}/> 
        <Languages languages={languages} setLanguages={setLanguages}/>     
        <Education education={education} setEducation={setEducation}/>
      </div>

      <div class="DisplayWrapper">

        <div className="nameContainer">
          <h1>{basicInfo.name}</h1>
        </div>  
        <div className="profileContainer">
          <p>{basicInfo.email}</p>
          <p>|</p> 
          <p>{basicInfo.phone}</p>
          <p>|</p> 
          <p>{basicInfo.location}</p>
          <p>|</p> 
          <p><a href={basicInfo.github} target="_blank">Github</a></p>
          <p>|</p> 
          <p><a href={basicInfo.linkedin} target="_blank">LinkedIn</a></p>
        </div>  
        <div className="seperator"></div>  

        <div className="SummaryContainer">
          <h2>SUMMARY</h2>
          <div className="seperator"></div> 
          <p>{basicInfo.summary}</p>
        </div>  


        <div className="educationContainer">
          <h2>WORK EXPERIENCE</h2>
          <div className="seperator"></div> 
        </div>

        {work.map((item) => (
          <div key={item.id}>
            <div className="companyDateContainer">
              <h3>{item.company}</h3>
              <div className="dateContainer">
              <h3>{item.fromDate}</h3>
              <h3>-</h3>
              <h3>{item.untilDate}</h3>
              </div>
            </div>
            <div className="positionLocationContainer">
              <p>{item.position}</p>
              <p>{item.location}</p>
            </div>
            <div className="descriptionContainer">
              <pre>{item.description}</pre>
            </div>
          </div>
        ))}


        <div className="educationContainer">
          <h2>CERTIFICATIONS & SKILLS</h2>
          <div className="seperator"></div> 
 
        <div className="companyDateContainer">

          <div className="certContainer">
            <h3>Certifications:</h3>  

            {certifications.map((item) => (
              <div key={item.id}>
                  <p>{item.certification}</p>
              </div>
            ))}
            </div>
          </div>

          <div className="languageContainer">
            <h3>Languages:</h3>  

            {languages.map((item) => (
              <div key={item.id}>
                  <p>{item.language}</p>
              </div>
            ))}
          </div>
        </div> 

        {education.map((item) => (
          <div key = {item.id}>

          <div className="educationContainer">
            <h2>EDUCATION</h2>
            <div className="seperator"></div> 

            <div className="eduContentContainer">
              <div className="schoolDegreeSection">  
              <h3>{item.school}</h3>
              <p>{item.degree}</p>
              </div> 
              <div className="eduDateContainer">  
                <p>{item.date}</p>
              </div>     
            </div> 
          </div> 
              

          </div>         
        ))}




      </div>
    </div>

    </>
  )
}

export default App
