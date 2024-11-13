import React from "react";
import './forms.css'

const ThirdForm = () => {
    return (
        <form className="forms-container third-forms-container" onSubmit={handleSubmit}>
            <h2>BIC Annual Data Form</h2>
            
            <div className="forms-group">
                <label>Full Name of Faculty Member</label>
                <input type="text" name="facultyName" value={formData.facultyName} onChange={handleChange} required />
            </div>

            <div className="forms-group">
                <label>Designation</label>
                <input type="text" name="designation" value={formData.designation} onChange={handleChange} required />
            </div>

            <div className="forms-group">
                <label>Name of Department</label>
                <input type="text" name="departmentName" value={formData.departmentName} onChange={handleChange} required />
            </div>

            <div className="forms-group">
                <label>Email address of Faculty</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <button type="submit" className="forms-submit-button">Submit</button>
        </form>
    );
};
