import {projectObjectList} from "../datas/ProjectObjectList";
import '../styles/ProjectObjectList.css';
import ProjectItem from './ProjectItem.js';



function ProjectList() {

    return (
            <div>
                <ul style={{listStyleType: 'circle'}}>
                    {projectObjectList.map(element =>
                        <li key={element.category}>{element.name + " : " + element.category} </li>
                    )}
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