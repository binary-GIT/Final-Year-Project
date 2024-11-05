import React, { useState } from 'react';


const FirstForm = () => {
    const [formData, setFormData] = useState({
        facultyName: '',
        department: '',
        email: '',
        hecGrantsSubmitted: 'NIL',
        nonHecGrantsSubmitted: 'NIL',
        hecGrantsApproved: 'NIL',
        nonHecGrantsApproved: 'NIL',
        hecProjectsCompleted: 'NIL',
        nonHecProjectsCompleted: 'NIL',
        jointResearchSubmitted: 'NIL',
        jointResearchApproved: 'NIL',
        jointResearchCompleted: 'NIL',
        policyAdvocacy: 'NIL',
        researchLinks: 'NIL',
        civicEngagements: 'NIL',
        consultancyContracts: 'NIL',
        liaisonDeveloped: 'NIL',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('First Form Data Submitted:', formData);
        // Add functionality to send this data to a server or process it as needed
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2>Research Grants and Projects Form</h2>

            <div className="form-group">
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

            <div className="form-group">
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

            <div className="form-group">
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

            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
};

const renderMetrics = (formData, handleChange) => {
    const metrics = [
        { label: 'Number of Research Grants Submitted to HEC Source*', name: 'hecGrantsSubmitted' },
        { label: 'Number of Research Grants Submitted to Non HEC Source*', name: 'nonHecGrantsSubmitted' },
        { label: 'Number of Research Grants Approved from HEC Source*', name: 'hecGrantsApproved' },
        { label: 'Number of Research Grants Approved from Non HEC Source*', name: 'nonHecGrantsApproved' },
        { label: 'Number of HEC Funded Research Projects Completed*', name: 'hecProjectsCompleted' },
        { label: 'Number of Non HEC Funded Research Projects Completed*', name: 'nonHecProjectsCompleted' },
        { label: 'Joint Research Project Submitted to National/International Funding Agencies*', name: 'jointResearchSubmitted' },
        { label: 'Joint Research Project Approved from National/International Funding Agencies*', name: 'jointResearchApproved' },
        { label: 'Joint Research Project Completed (National/International Funding Agencies)*', name: 'jointResearchCompleted' },
        { label: 'Number of Policy Advocacy/Case Studies*', name: 'policyAdvocacy' },
        { label: 'Number of Research Links Established*', name: 'researchLinks' },
        { label: 'Number of Civic Engagements*', name: 'civicEngagements' },
        { label: 'Number of Consultancy Contracts Executed through ORIC*', name: 'consultancyContracts' },
        { label: 'Number of Liaison Developed with University\'s Advance Studies & Research Board (AS&RB)*', name: 'liaisonDeveloped' },
    ];

    return metrics.map((metric, index) => (
        <div className="form-group" key={index}>
            <label htmlFor={metric.name}>{metric.label}</label>
            <select
                id={metric.name}
                name={metric.name}
                value={formData[metric.name]}
                onChange={handleChange}
            >
                <option value="NIL">NIL</option>
                {[...Array(10).keys()].map(num => (
                    <option key={num + 1} value={num + 1}>{num + 1}</option>
                ))}
            </select>
        </div>
    ));
};

export default FirstForm;
