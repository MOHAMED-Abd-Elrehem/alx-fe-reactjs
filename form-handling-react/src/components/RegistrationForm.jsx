import { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevstate => ({ ...prevstate, [name]: value }));
    };
    const [errors , seErrors] = useState()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    const newErrors = {};
    if (!setFormData.name) {
        errors.name= 'name is requierd'
    } 
    if (!setFormData.password) {
        errors.password= 'password is requierd'
    } 
    if (!setFormData.email) {
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
            value={formData.name}
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