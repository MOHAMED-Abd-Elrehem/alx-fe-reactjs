import { create } from 'zustand'
const useRecipeStore = create(set => ({
    recipes: [],
    addRecipe: (newRecipes) => set(state => ({ recipes: [state.recipes, newRecipes] })),
    deleteRecipe: (removeRecipe) => set((state) => ({recipes: state.recipes.filter((recipe) => recipe.id !==removeRecipe)})),
    updateRecipe: (updateRecipe) => set((state)=> ({recipes: state.recipe.map((recipe)=> recipe.id ===updateRecipe ? updateRecipe: recipe) })),
    setRecipes: (recipes) => set({recipes})
}))
export default useRecipeStore