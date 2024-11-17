import DeletRecipeButton from "./DeleteRecipeButton";
import EditRecipeForm from "./EditRecipeForm";
import  useRecipeStore  from "./recipeStore";
const RecipeDetails = (recipeId) => {
const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  return (
    <div>
          <EditRecipeForm recipe={recipe} />
          <DeletRecipeButton recipeId={recipeId } />
    </div>
  );
};
export default RecipeDetails