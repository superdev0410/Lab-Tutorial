import Project from "./Project";

interface ProjectCardProp {
    info: Project;
}

const ProjectCard = ( { info }: ProjectCardProp ) => {

    const handleEditClick = (data: Project) => {
        console.log(data);
    }

    return (
        <div key={info["id"]} className="cols-sm">
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
        </div>
    )
}

export default ProjectCard;