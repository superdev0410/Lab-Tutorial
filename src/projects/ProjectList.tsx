import Project from "./Project";

interface ProjectListProps {
    projects: Project[];
}

const ProjectList = ( { projects }: ProjectListProps ) => {
    return (
        <>
        <ul className="row">
            {projects.map((project) => (
                <div key={project["id"]} className="cols-sm">
                    <div className="card">
                        <img src={project["imageUrl"]} />
                        <section className="section dark">
                            <h5 className="strong">
                                <strong>{project["name"]}</strong>
                            </h5>
                            <p>{project["description"]}</p>
                            <p>Budget: {project["budget"].toLocaleString()}</p>
                        </section>
                    </div>
                </div>
            ))}
        </ul>
        </>
    )
}

export default ProjectList;