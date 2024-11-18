import { create } from 'zustand'
const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipes) =>
    set((state) => ({ recipes: [state.recipes, newRecipes] })),
  deleteRecipe: (removeRecipe) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== removeRecipe),
    })),
  updateRecipe: (updateRecipe) =>
    set((state) => ({
      recipes: state.recipe.map((recipe) =>
        recipe.id === updateRecipe ? updateRecipe : recipe
      ),
    })),
  setRecipes: (recipes) => set({ recipes }),
  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),
    recommendations: [],
    generateRecommendations: () =>set(state => {
        const recomended = state.recipes.filter(recipe => state.favorites.includes(recipe.id) && Math.random() > 0.5);
        return { recommendations: recomended }; 
    }),
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) &&
          (state.ingredientFilter
            ? recipe.ingredients.includes(state.ingredientFilter)
            : true) &&
          (state.cookingTimeFilter
            ? recipe.cookingTime <= state.cookingTimeFilter
            : true)
      ),
    })),
}));

export default useRecipeStore;
