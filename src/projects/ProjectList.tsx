import Project from "./Project";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
    projects: Project[];
    onClick: (info: Project) => void;
}

const ProjectList = ( props: ProjectListProps ) => {
    const {
        projects,
        onClick
    } = props;

    return (
        <>
        <ul className="row">
            {projects.map((data) => (
                <ProjectCard info={data} onClick={onClick}/>
            ))}
        </ul>
        </>
    )
}

export default ProjectList;