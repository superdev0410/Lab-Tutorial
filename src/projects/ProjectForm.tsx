const ProjectForm = () => {
    return (
        <form className="input-group vertical">
            {/* UI Elements for name field. */}
            <label htmlFor="name">Project Name</label>
            <input type="text" name="name" placeholder="Enter name"/>

            {/* UI Elements for description field */}
            <label htmlFor="description">Description</label>
            <textarea name="description" placeholder="enter description"></textarea>
            
            {/* UI Elements for budget field */}
            <label htmlFor="budget">Budget</label>
            <input type="number" name="budget" placeholder="enter budget"></input>

            {/* Show the project is active or not and show the checkbox to select tickets */}
            <label htmlFor="isActive">Active?</label>
            <input type="checkbox" name="is active"></input>

            {/* Show save and cancel button. */}
            <div className="input-group">
                <button className="primary bordered medium">Save</button>
                <span></span>
                <button className="bordered medium">Cancel</button>
            </div>
        </form>
    )
}

export default ProjectForm;