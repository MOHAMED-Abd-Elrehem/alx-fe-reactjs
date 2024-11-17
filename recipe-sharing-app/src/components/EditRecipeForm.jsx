import { useState } from 'react';
import useRecipeStore from "./recipeStore";

function EditRecipeForm (recipe){
    const [editRecipe, setEditRecipe] = useState(recipe);
    const { updateRecipe } = useRecipeStore();
    const handleChange = (e) => {
        setEditRecipe({ ...editRecipe, [e.target.name]: e.target.value })
    };
    const handleSubmit = (event) => {
        event.preventDefault(),
        updateRecipe(editRecipe);
    }
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={editRecipe.name} onChange={handleChange} />
        <textarea
          name="ingredients"
          value={editRecipe.ingredients}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Update Recipe</button>
      </form>
    );
}


export default EditRecipeForm