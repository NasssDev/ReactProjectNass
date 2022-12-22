import CareScale from "./CareScale";
import "../assets/projetMap.png";
import "../styles/PMap.css";

function ProjectItem ({name, isBestProject, stack, id, cover}) {
    return (
        <li className="project-item" key={id}>
            <img src={cover} alt={`${name} cover`} className='logo-PMap'/>
        {name}
        {isBestProject && <div className="best"> **Good** </div>}
            <div>
                <CareScale scaleValue={stack}/>
            </div>
    </li>)
}

export default ProjectItem