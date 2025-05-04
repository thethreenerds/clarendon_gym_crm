import React, { useState } from 'react';

function CreateUserForm(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: ""
    });
}

const handleChange = (e) => {
    setFormData({...formDatam, [e.target.name]: e.target.value});
};

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
};

return (
    <form onSubmit={handleSubmit}>
        <h2>Create New User</h2>
        <input name="name" placeholder="Name" value ={formData.name} onChange={handleChange}/>
        <input name="email" placeholder="Email" value ={formData.email} onChange={handleChange}/>
        <input name="password" placeholder="Password" value ={formData.password} onChange={handleChange}/>
        <input name="role" placeholder="Role" value ={formData.role} onChange={handleChange}/>
        <button type ="submit">Create User</button>
    </form>

);

export default CreateUserForm;
