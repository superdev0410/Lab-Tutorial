import { Fragment, useState } from "react";
import MOCK_PROJECTS from "./MocProjects";
import ProjectList from "./ProjectList";
import Project from "./Project";

const ProjectPage = () => {
	// define states
	const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);

	// define event handlers
	const saveProject = (newproject: Project) => {
		setProjects((oldprojects) => {
			return oldprojects.map((oldproject: Project) => {
				return oldproject.id === newproject.id
					? newproject
					: oldproject;
			});
		});
	};

	return (
		<Fragment>
			<h1>Projects</h1>
			<ProjectList projects={projects} onSave={saveProject} />
		</Fragment>
	);
};

export default ProjectPage;
