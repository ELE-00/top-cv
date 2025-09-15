import { useState } from 'react'
import '../styles/basicInfo.css'

function BasicInfo({basicInfo, onChange}) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
      setIsExpanded(prev => !prev);
  }

  return (
    <>
      <div className={`basicinfoMainContainer ${isExpanded ? 'expanded' : 'collapsed'}`}>
          <div className="header"> 
            <h3>General Information</h3>
            <button onClick={toggleExpand}>
              <img src="assets/down.png" alt="down.png" className="expandArrow"></img>
            </button>
          </div>
          <form className={`basicinfoForm ${isExpanded ? 'expanded' : 'collapsed'}`}>
              <label for="name">Name:</label>
              <input type="text" id="name" placeholder="Your full name" value={basicInfo.name} onChange={onChange}></input>
              
              <label for="email">Email:</label>
              <input type="email" id="email" placeholder="you@example.com" value={basicInfo.email} onChange={onChange}></input>

              <label for="phone">Phone number:</label>
              <input type="phone" id="phone" placeholder="000-000-000"  value={basicInfo.phone} onChange={onChange}></input>

              <label for="location">Location:</label>
              <input type="phone" id="location" placeholder="000-000-000"  value={basicInfo.location} onChange={onChange}></input>

              <label for="github">Github:</label>
              <input type="text" id="github" placeholder="https://github.com/account" value={basicInfo.github} onChange={onChange}></input>

              <label for="linkedin">LinkedIn:</label>
              <input type="text" id="linkedin" placeholder="https://www.linkedin.com/in/account" value={basicInfo.linkedin} onChange={onChange}></input>

              <label for="summary">Summary:</label>
              <textarea
              id="summary"
              placeholder="I am this and that..."
              value={basicInfo.summary}
              onChange={onChange}
              ></textarea>

          </form>
      </div>
    </>
  )
}

export default BasicInfo