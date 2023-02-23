import React, {useState} from "react";
import Project from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
    projects: Project[];
}

const ProjectList = ( { projects }: ProjectListProps ) => {
    const [projectBeingEdited, setProjectBeingEdited] = useState({});

    const handleEditClick = (info: Project) => {
        setProjectBeingEdited(info);
    }

    return (
        <>
        <ul className="row">
            {projects.map((data) => (
                <div key={data.id} className="cols-sm">
                    {
                        projectBeingEdited === data? 
                        <ProjectForm/>
                        :<ProjectCard info={data} onClick={handleEditClick}/> 
                    }
                </div>                
            ))}
        </ul>
        </>
    )
}

export default ProjectList;