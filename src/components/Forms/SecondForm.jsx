import React from "react";
import './forms.css'

const SecondForm = () => {
    return (
        <form className="forms-container second-forms-container" onSubmit={handleSubmit}>
            <h2>Intellectual Property, Capacity Building and Research Publication Form</h2>
            
            <div className="forms-group">
                <label>Name of Faculty Member</label>
                <input type="text" name="facultyName" value={formData.facultyName} onChange={handleChange} required />
            </div>

            <div className="forms-group">
                <label>Name of Department</label>
                <input type="text" name="departmentName" value={formData.departmentName} onChange={handleChange} required />
            </div>

            <div className="forms-group">
                <label>Email address of Faculty</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            {['disclosuresMade', 'patentsFiled', 'patentsGranted', 'licensingNegotiations', 'licensesSigned', 'prototypesDeveloped', 'prototypesDisplayed', 'industryVisits', 'collaborationAgreements', 'awardsWon', 'oricTrainings', 'otherTrainings', 'researchPublications'].map(field => (
                <React.Fragment key={field}>
                    <div className="forms-group">
                        <label>{formatLabel(field)}</label>
                        <select name={field} value={formData[field]} onChange={handleChange} required>
                            <option value="NIL">NIL</option>
                            {[...Array(10).keys()].map(i => (
                                <option key={i + 1} value={`0${i + 1}`}>{`0${i + 1}`}</option>
                            ))}
                        </select>
                    </div>
                </React.Fragment>
            ))}
            
            <button type="submit" className="forms-submit-button">Submit</button>
        </form>
    );
};
