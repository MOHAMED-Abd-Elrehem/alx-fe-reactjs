import useRecipeStore from "./recipeStore"; 
import {  Link } from "react-router-dom";

const RecipeList = () => {
  const {filteredRecipes} = useRecipeStore();
  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipes/${recipe.id}`}>Details</Link>
        </div>
      ))}
    </div>
  );
};
export default RecipeList;
