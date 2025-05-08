import React, { useState } from 'react';

function CreateUserForm(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: ""
    });


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //fetch calls go here
        try {
            const res = await fetch('http://localhost:5000/api/users', {
                method: 'POST',
                headers: {'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if(!res.ok) throw new Error('Failed to create user');

            const data = await res.json();
            console.log('User Created!', data);

            
        } catch (err){
            console.error("Error:", err);
        }
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
}
    export default CreateUserForm;
