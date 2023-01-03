import CareScale from "./CareScale";
import "../assets/projetMap.png";
import "../styles/PMap.css";

function ProjectItem ({name, isBestProject, stack, id, cover, url}) {
    return (
        <li className="project-item" key={id}>
           <a href={url}><img src={cover} alt={`${name} cover`} className='cover-Project'/></a>
            {name}
        {isBestProject && <div className="best"> **Good** </div>}
            <div>
                <CareScale scaleValue={stack}/>
            </div>
    </li>)
}

export default ProjectItem