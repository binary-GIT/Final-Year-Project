import React, { useState } from 'react';


const SecondForm = () => {
    const [formData, setFormData] = useState({
        facultyName: '',
        departmentName: '',
        email: '',
        disclosuresMade: 'NIL',
        patentsFiled: 'NIL',
        patentsGranted: 'NIL',
        licensingNegotiations: 'NIL',
        licensesSigned: 'NIL',
        prototypesDeveloped: 'NIL',
        prototypesDisplayed: 'NIL',
        industryVisits: 'NIL',
        collaborationAgreements: 'NIL',
        awardsWon: 'NIL',
        oricTrainings: 'NIL',
        otherTrainings: 'NIL',
        researchPublications: 'NIL',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Second Form Data:', formData);
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <h2>Intellectual Property, Capacity Building and Research Publication Form</h2>
            <label>Name of Faculty Member</label>
            <input type="text" name="facultyName" value={formData.facultyName} onChange={handleChange} required />
            
            <label>Name of Department</label>
            <input type="text" name="departmentName" value={formData.departmentName} onChange={handleChange} required />
            
            <label>Email address of Faculty</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            
            {['disclosuresMade', 'patentsFiled', 'patentsGranted', 'licensingNegotiations', 'licensesSigned', 'prototypesDeveloped', 'prototypesDisplayed', 'industryVisits', 'collaborationAgreements', 'awardsWon', 'oricTrainings', 'otherTrainings', 'researchPublications'].map(field => (
                <React.Fragment key={field}>
                    <label>{formatLabel(field)}</label>
                    <select name={field} value={formData[field]} onChange={handleChange} required>
                        <option value="NIL">NIL</option>
                        {[...Array(10).keys()].map(i => (
                            <option key={i + 1} value={`0${i + 1}`}>{`0${i + 1}`}</option>
                        ))}
                    </select>
                </React.Fragment>
            ))}
            
            <button type="submit">Submit</button>
        </form>
    );
};

const formatLabel = (field) => {
    const labels = {
        disclosuresMade: 'Number of IP Disclosures Made',
        patentsFiled: 'Number of Patents/Trademarks/Copyrights Filed',
        patentsGranted: 'Number of Patents/Trademarks/Copyrights Granted',
        licensingNegotiations: 'Number of IP Licensing Negotiations Initiated',
        licensesSigned: 'Number of Non-Exclusive or Exclusive Licenses Signed',
        prototypesDeveloped: 'Number of Product/Prototype Developed',
        prototypesDisplayed: 'Number of Product/Prototype Displayed',
        industryVisits: 'Number of Visits by Industry Representatives',
        collaborationAgreements: 'Number of Agreements Signed for Collaboration',
        awardsWon: 'Number of National or International Honors/Awards Won',
        oricTrainings: 'Trainings/Workshops/Seminars by ORIC',
        otherTrainings: 'Trainings/Workshops/Seminars by Other Institutions',
        researchPublications: 'Number of Research Publications',
    };
    return labels[field];
};

export default SecondForm;
