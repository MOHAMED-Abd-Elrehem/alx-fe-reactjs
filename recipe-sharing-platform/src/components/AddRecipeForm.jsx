import { useState } from "react";

const AddRecipeForm = () => {
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        summary: '',
        image: '',
        ingredients: [],
        steps: [],
        cooking: ''
    });
    const [errors, setErrors] = useState({})
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.title) {
            newErrors.title = 'Title is required'
        }
        if (!formData.summary) {
            newErrors.summary = 'Summary is required'
        }
        if (!formData.ingredients) {
            newErrors.ingredients = 'Ingredients is required'
        }
        if (!formData.steps) {
            newErrors.steps = "steps is required";
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        console.log(formData)
        setFormData({
            id: "",
            title: "",
            summary: "",
            image: "",
            ingredients: [],
            steps: [],
            cooking: "",
        });
        setErrors({});
    };
    return (

        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Add a New Recipe</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <textarea
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className={`mt-1 block w-full rounded-md  
            border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
            ${errors.title ? 'border-red-500' : ''}`} />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}


                    <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
                        Ingredients
                    </label>
                    <textarea
                        type="text"
                        id="ingredients"
                        name="ingredients"
                        value={formData.ingredients}
                        onChange={handleChange}
                        className={`mt-1 block w-full rounded-md  
            border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
            ${errors.ingredients ? 'border-red-500' : ''}`} />
                    {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}

                    <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">
                        Instructions
                    </label>
                    <textarea
                        type="text"
                        id="steps"
                        name="steps"
                        value={formData.steps}
                        onChange={handleChange}
                        className={`mt-1 block w-full rounded-md  
            border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
            ${errors.steps? 'border-red-500' : ''}`} />
                    {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                </button>
            </form>
        </div>
    ); 
    
};

export default AddRecipeForm;