import Project from "./Project";

interface ProjectCardProp {
    info: Project;
    onClick: (data: Project) => void;                                                                            
}

const ProjectCard = ( props: ProjectCardProp ) => {
    const {info, onClick} = props;

    const handleEditClick = (data: Project) => {
        onClick(data);
    }

    return (
        <div className="card">
            <img src={info["imageUrl"]} />
            <section className="section dark">
                <h5 className="strong">
                    <strong>{info["name"]}</strong>
                </h5>
                <p>{info["description"]}</p>
                <p>Budget: {info["budget"].toLocaleString()}</p>
                <button className="bordered" onClick={() => {handleEditClick(info)}}>
                    <span className="icon-edit"></span>
                    Edit
                </button>
            </section>
        </div>
    )
}

export default ProjectCard;