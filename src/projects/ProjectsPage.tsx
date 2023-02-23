import React from "react"
import MOCK_PROJECTS from "./MocProjects"
import ProjectList from "./ProjectList"


const ProjectPage: React.FC = () => {
    return (
        <>
        <h1>Projects</h1>
        <ProjectList projects={MOCK_PROJECTS} />
        </>
    );
}

export default ProjectPage;