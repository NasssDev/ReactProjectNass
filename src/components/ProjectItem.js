import CareScale from "./CareScale";

function ProjectItem ({name, isBestProject, stack, id}) {
    return (
        <li className="categories" key={id}>
        {name}
        {isBestProject && <div className="best"> **goodProject** </div>}
        <CareScale scaleValue={stack}/>
    </li>)
}

export default ProjectItem