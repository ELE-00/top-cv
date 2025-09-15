import { useState } from 'react'
import '../styles/work.css'

function WorkFrom({work, onChange, onDelete, parentExpanded}){
    const [childExpanded, setChildExpanded] = useState(true);
    const isVisible = parentExpanded && childExpanded;

    const toggleBtnExpand = () => {
        setChildExpanded(prev => !prev);
    }

    return(
        <div className={`workFormsectionWrapper ${isVisible ? 'expanded' : 'collapsed'}`}>
            <div className="workFormHeaderContainer">
                <h3>{work.company}</h3>
                <button onClick={toggleBtnExpand}>
                    <img src="assets/down.png" alt="down.png" className="expandArrow"></img>
                </button>
            </div>

            <form className={`workForm ${isVisible ? 'expanded' : 'collapsed'}`}>
                <label for="company" >Company:</label>
                <input type="text" id="company" placeholder= "Company inc." value={work.company} onChange={(e) => onChange(work.id, "company", e.target.value)}></input>

                <label for="position" >Position:</label>
                <input type="text" id="position" placeholder= "Software Developer" value={work.position} onChange={(e) => onChange(work.id, "position", e.target.value)}></input>

                <label htmlFor="description">Description:</label>

                <textarea
                    id="description"
                    placeholder="Describe your main responsibilities"
                    value={work.description}
                    onChange={(e) => onChange(work.id, "description", e.target.value)}
                ></textarea>


                <label for="location" >Location/Remote:</label>
                <input type="text" id="location" placeholder= "Lisbon, Remote" value={work.location} onChange={(e) => onChange(work.id, "description", e.target.value)}></input>

                <label for="fromDate" >From:</label> 
                <input type="text" id="fromDate" placeholder= "Jun 2022" value={work.fromDate} onChange={(e) => onChange(work.id, "fromDate", e.target.value)}></input>

                <label for="untilDate" >Until:</label>
                <input type="text" id="untilDate" placeholder= "Sept 2025" value={work.untilDate} onChange={(e) => onChange(work.id, "untilDate", e.target.value)}></input>

            </form>

            <div className={`workAddBtnContainer ${isVisible ? 'expanded' : 'collapsed'}`}>
                <button className="deleteBtn" onClick={() => onDelete(work.id)}>Delete</button>
            </div>

        </div>


    );
}

export default WorkFrom