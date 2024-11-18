import { create } from 'zustand'
const useRecipeStore = create(set => ({
    recipes: [],
    addRecipe: (newRecipes) => set(state => ({ recipes: [state.recipes, newRecipes] })),
    deleteRecipe: (removeRecipe) => set((state) => ({ recipes: state.recipes.filter((recipe) => recipe.id !== removeRecipe) })),
    updateRecipe: (updateRecipe) => set((state) => ({ recipes: state.recipe.map((recipe) => recipe.id === updateRecipe ? updateRecipe : recipe) })),
    setRecipes: (recipes) => set({ recipes }),
    searchTerm: '',
    setSearchTerm: (term) => set({ searchTerm: term }),
    filteredRecipes: [],
    filterRecipes: () => set(state => ({
        filteredRecipes: state.recipes.filter(recipe => recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) &&
            (state.ingredientFilter ? recipe.ingredients.includes(state.ingredientFilter) : true) &&
            (state.cookingTimeFilter ? recipe.cookingTime <= state.cookingTimeFilter : true)
        )
    }))
        
    }));

export default useRecipeStore;
