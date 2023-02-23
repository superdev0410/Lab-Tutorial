import React from "react"
import MOCK_PROJECTS from "./MocProjects"
import ProjectList from "./ProjectList"
import ProjectForm from "./ProjectForm"
import Project from "./Project"

const ProjectPage: React.FC = () => {
    const handleEditClick = (info: Project) => {
        console.log(info)
    }

    return (
        <>
        <h1>Projects</h1>
        <ProjectList projects={MOCK_PROJECTS} onClick={handleEditClick}/>
        <ProjectForm/>
        </>
    );
}

export default ProjectPage;