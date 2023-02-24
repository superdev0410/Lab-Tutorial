import { SyntheticEvent, useState } from "react";
import Project from "./Project";

interface ProjectFormProps {
	initialproject: Project;
	onCancel: () => void;
	onSave: (info: Project) => void;
}

interface ChangedValue {
	[name: string]: string | number | boolean;
}

const ProjectForm = ({
	initialproject,
	onCancel,
	onSave,
}: ProjectFormProps) => {
	// define states
	const [project, setProject] = useState(initialproject);

	// define event handlers
	const onChangeEventHandler = (event: any) => {
		const { type, name, value, checked } = event.target;
		let change: ChangedValue = {};

		//Update state value of checkbox using checked.
		//Update other values using value.
		if (type === "checkbox") {
			change[name] = checked;
		} else {
			change[name] = value;
		}

		// Update project state
		setProject((p) => {
			let updateProject = new Project({ ...p, ...change });
			return updateProject;
		});
	};

	const handleSubmitEvent = (event: SyntheticEvent) => {
		event.preventDefault();
		onSave(project);
	};

	return (
		<form className="input-group vertical">
			{/* UI Elements for name field. */}
			<label htmlFor="name">Project Name</label>
			<input
				type="text"
				name="name"
				placeholder="Enter name"
				value={project.name}
				onChange={onChangeEventHandler}
			/>

			{/* UI Elements for description field */}
			<label htmlFor="description">Description</label>
			<textarea
				name="description"
				placeholder="enter description"
				value={project.description}
				onChange={onChangeEventHandler}
			></textarea>

			{/* UI Elements for budget field */}
			<label htmlFor="budget">Budget</label>
			<input
				type="number"
				name="budget"
				placeholder="enter budget"
				value={project.budget}
				onChange={onChangeEventHandler}
			></input>

			{/* Show the project is active or not and show the checkbox to select tickets */}
			<label htmlFor="isActive">Active?</label>
			<input
				type="checkbox"
				name="isActive"
				checked={project.isActive}
				onChange={onChangeEventHandler}
			></input>

			{/* Show save and cancel button. */}
			<div className="input-group">
				<button
					className="primary bordered medium"
					onClick={handleSubmitEvent}
				>   
					Save
				</button>
				<span></span>
				<button className="bordered medium" onClick={onCancel}>
					Cancel
				</button>
			</div>
		</form>
	);
};

export default ProjectForm;
