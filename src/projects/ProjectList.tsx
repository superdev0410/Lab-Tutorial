import Project from "./Project";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
    projects: Project[];
}

const ProjectList = ( { projects }: ProjectListProps ) => {
    return (
        <>
        <ul className="row">
            {projects.map((data) => (
                <ProjectCard info={data} />
            ))}
        </ul>
        </>
    )
}

export default ProjectList;