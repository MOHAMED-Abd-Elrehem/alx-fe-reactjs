import { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const handleChange = (event) => {
        setFormData(({ ...formData, [event.target.namr]: event.target.value }));
    };
    const [errors , seErrors] = useState()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    const newErrors = {};
    if (!FormData.username) {
        errors.name= 'name is requierd'
    } 
    if (!FormData.password) {
        errors.password= 'password is requierd'
    } 
    if (!FormData.email) {
        errors.email= 'email is requierd'
    } 
    seErrors(newErrors);
    if (Object.keys(errors).length === 0) {
        console.log(formData)
    }
    return (
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            value={formData.username}
            onChange={handleChange}
        />
        {errors.name && <p>{errors.name} </p>}
        <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
        />
        {errors.name && <p>{errors.name} </p>}

        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
        />
            {errors.email && <p>{errors.email} </p>}
            <button type="submit">Submit</button>
      </form>
    );
}


export default RegistrationForm;