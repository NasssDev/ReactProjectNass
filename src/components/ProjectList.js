import {projectObjectList} from "../datas/ProjectObjectList";
import '../styles/ProjectObjectList.css';
import ProjectItem from './ProjectItem.js';



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
                        <li key={cat}>{cat} </li>
                    ))}
                </ul>
                <ul className={"projectname"}>
                    {projectObjectList.map((project, index) => (
                        <ProjectItem key={project.id}
                                     name={project.name}
                                     isBestProject={project.isBestProject}
                                     stack={project.stack}
                                     id={project.id}
                                     cover={project.cover}
                                     url={project.url}
                        />
                    ))}
                </ul>



            </div>

    )
}



export default ProjectList;