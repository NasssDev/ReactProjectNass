import {projectObjectList} from "../datas/ProjectObjectList";
import '../styles/ProjectObjectList.css';



function ProjectList() {

    const categories = projectObjectList.reduce(
        (acc, elem) =>

            acc.includes(elem.category) ? acc : acc.concat(elem.category),
        []
    )

    return (
            <div>
                <ul >
                    {categories.map((cat, index) => (
                        <li key={cat}>{cat}</li>
                    ))}
                </ul>
                <ul className={"projectname"}>
                    {projectObjectList.map((project, index) => (
                        <li className="categories" key={project.id}>
                            {project.name}
                            {project.isBestProject && <div className="best"> **NassBro** </div>}
                        </li>

                    ))}

                </ul>
            </div>
    )
}



export default ProjectList;