
import '../styles/basicInfo.css'

function BasicInfo({basicInfo, onChange}) {
  

  return (
    <>
      <div class="sectionWrapper">
          <div class="header"> 
            <h3>General Information</h3>
            <button>
              <img src="assets/down.png" alt="down.png" class="expandArrow"></img>
            </button>
          </div>
          <form>
              <label for="name">Name:</label>
              <input type="text" id="name" placeholder="Your full name" value={basicInfo.name} onChange={onChange}></input>
              
              <label for="email">Email:</label>
              <input type="email" id="email" placeholder="you@example.com" value={basicInfo.email} onChange={onChange}></input>

              <label for="phone">Phone number:</label>
              <input type="phone" id="phone" placeholder="000-000-000"  value={basicInfo.phone} onChange={onChange}></input>

              <label for="github">Github:</label>
              <input type="text" id="github" placeholder="https://github.com/account" value={basicInfo.github} onChange={onChange}></input>

              <label for="linkedin">LinkedIn:</label>
              <input type="text" id="linkedin" placeholder="https://www.linkedin.com/in/account" value={basicInfo.linkedin} onChange={onChange}></input>

          </form>
      </div>
    </>
  )
}

export default BasicInfo