import { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const handleChange = (event) => {
        setFormData(({ ...formData, [event.target.namr]: event.target.value }));
    };
    const [errors , setErrors] = useState()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    const newErrors = {};
    if (!username) {
        errors.name= 'name is requierd'
    } 
    if (!password) {
        errors.password= 'password is requierd'
    } 
    if (!email) {
        errors.email= 'email is requierd'
    } 
    setErrors(newErrors);
    if (Object.keys(errors).length === 0) {
        console.log(formData)
    }
    return (
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            value={username}
            onChange={handleChange}
        />
        {errors.name && <p>{errors.name} </p>}
        <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
        />
        {errors.name && <p>{errors.name} </p>}

        <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
        />
            {errors.email && <p>{errors.email} </p>}
            <button type="submit">Submit</button>
      </form>
    );
}


export default RegistrationForm;