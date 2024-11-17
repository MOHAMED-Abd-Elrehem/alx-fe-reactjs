import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";
const DeletRecipeButton = () => {
    const deleteRecipe = useRecipeStore()
    const navigate = useNavigate()
    const handleDeleted = () => {
        deleteRecipe();
        navigate();
    }
    return (
        <button onClick={handleDeleted}> Delete Recipe</button>
    )
}







export default DeletRecipeButton