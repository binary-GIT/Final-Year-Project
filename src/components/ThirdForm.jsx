import React, { useState } from 'react';


const ThirdForm = () => {
    const [formData, setFormData] = useState({
        facultyName: '',
        designation: '',
        departmentName: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Third Form Data:', formData);
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <h2>BIC Annual Data Form</h2>
            <label>Full Name of Faculty Member</label>
            <input type="text" name="facultyName" value={formData.facultyName} onChange={handleChange} required />
            
            <label>Designation</label>
            <input type="text" name="designation" value={formData.designation} onChange={handleChange} required />
            
            <label>Name of Department</label>
            <input type="text" name="departmentName" value={formData.departmentName} onChange={handleChange} required />
            
            <label>Email address of Faculty</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            
            <button type="submit">Submit</button>
        </form>
    );
};

export default ThirdForm;
