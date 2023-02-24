import React, {useState} from "react";
import Project from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
    projects: Project[];
    onSave: (info: Project) => void;
}

const ProjectList = ( props: ProjectListProps ) => {
    // get props
    const {projects, onSave} = props;

    const [projectBeingEdited, setProjectBeingEdited] = useState({});

    const handleEditClick = (info: Project) => {
        setProjectBeingEdited(info);
    }

    const handleCancelClick = () => {
        setProjectBeingEdited({});
    }

    return (
        <>
        <ul className="row">
            {projects.map((data) => (
                <div key={data.id} className="cols-sm">
                    {
                        projectBeingEdited === data? 
                        <ProjectForm onCancel={handleCancelClick} onSave={onSave}/>
                        :<ProjectCard info={data} onClick={handleEditClick}/> 
                    }
                </div>                
            ))}
        </ul>
        </>
    )
}

export default ProjectList;