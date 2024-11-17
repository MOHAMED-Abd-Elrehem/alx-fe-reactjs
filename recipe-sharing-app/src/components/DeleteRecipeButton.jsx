import { useNavigate } from "react-router-dom";
const DeletRecipeButton = () => {
    const deleteRecipe = useNavigate()
    const handleDeleted = () => {
        deleteRecipe();
    }
    return (
        <button onClick={handleDeleted}> Delete Recipe</button>
    )
}







export default DeletRecipeButton