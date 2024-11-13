import React from "react";
import './forms.css'

const FirstForm = () => {
    return (
        <form onSubmit={handleSubmit} className="forms-container first-forms-container">
            <h2>Research Grants and Projects Form</h2>

            <div className="forms-group">
                <label htmlFor="facultyName">Name of Faculty Member*</label>
                <input
                    type="text"
                    id="facultyName"
                    name="facultyName"
                    value={formData.facultyName}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="forms-group">
                <label htmlFor="department">Name of Department*</label>
                <input
                    type="text"
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="forms-group">
                <label htmlFor="email">Email Address of Faculty*</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Metrics Inputs */}
            {renderMetrics(formData, handleChange)}

            <button type="submit" className="forms-submit-button">Submit</button>
        </form>
    );
};
