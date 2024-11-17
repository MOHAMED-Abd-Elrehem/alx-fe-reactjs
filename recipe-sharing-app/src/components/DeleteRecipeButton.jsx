import useRecipeStore from "./recipeStore";

const DeletRecipeButton = () => {
    const deleteRecipe = useRecipeStore()
    const handleDeleted = () => {
        deleteRecipe();
    }
    return (
        <button onClick={handleDeleted}> Delete Recipe</button>
    )
}







export default DeletRecipeButton