import { useState } from 'react'
import '../styles/work.css'

function WorkFrom({work, onChange, onDelete}){
    const [isBtnExpanded, setIsBtnExpanded] = useState(false);
    const [isFormExpanded, setIsFormExpanded] = useState(false);

    const toggleBtnExpand = () => {
        setIsBtnExpanded(!isBtnExpanded);
        setIsFormExpanded(!isFormExpanded);
    }

    return(
        <div className={`workFormSectionWrapper ${isBtnExpanded ? 'expanded' : 'collapsed'}`}>
            <div class="workFormHeaderContainer">
                <h3>Work Experience</h3>
                <button onClick={toggleBtnExpand}>
                    <img src="assets/down.png" alt="down.png" class="expandArrow"></img>
                </button>
            </div>

            <form className={`workForm ${isFormExpanded ? 'expanded' : 'collapsed'}`}>
                <label for="company" ></label>
                <input type="text" id="company" placeholder= "Company inc." value={work.company} onChange={(e) => onChange(work.id, "company", e.target.value)}></input>

                <label for="position" ></label>
                <input type="text" id="position" placeholder= "Software Developer" value={work.position} onChange={(e) => onChange(work.id, "position", e.target.value)}></input>

                <label for="description" ></label>
                <input type="text" id="description" placeholder= "Describe your main responsibilities" value={work.description} onChange={(e) => onChange(work.id, "description", e.target.value)}></input>

                <label for="fromDate" ></label> 
                <input type="text" id="fromDate" placeholder= "Jun 2022" value={work.fromDate} onChange={(e) => onChange(work.id, "fromDate", e.target.value)}></input>

                <label for="untilDate" ></label>
                <input type="text" id="untilDate" placeholder= "Sept 2025" value={work.untilDate} onChange={(e) => onChange(work.id, "untilDate", e.target.value)}></input>

            </form>

            <div className={`workAddBtnContainer ${isFormExpanded ? 'expanded' : 'collapsed'}`}>
                <button class="AddButton" onClick={() => onDelete(work.id)}>Delete</button>
            </div>

        </div>


    );
}

export default WorkFrom