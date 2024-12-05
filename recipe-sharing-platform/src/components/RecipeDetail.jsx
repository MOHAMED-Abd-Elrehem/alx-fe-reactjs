import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch('../data.json');
            const data = await response.json();
            const foundRecipe = data.find(recipe => recipe.id === parseInt(id))
            setRecipe(foundRecipe);
        };
        fetchRecipes();
    }, [id]);
return (
    <div className="container mx-auto px-4 py-8">
    {recipe ? (
    <div>
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4" />
        <p className="text-lg mb-4">{recipe.summary}</p>
        <h2 className="text-xl font-bold mb-2">Ingredients</h2>
        <ul>
            {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
            ))}
        </ul>
        <h2 className="text-xl font-bold mb-2">Instructions</h2>
        <ol>
            {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
            ))}
        </ol>
        </div>
    ) : (
        <p>Loading recipe...</p>
    )}
    </div>
);
}

export default RecipeDetail