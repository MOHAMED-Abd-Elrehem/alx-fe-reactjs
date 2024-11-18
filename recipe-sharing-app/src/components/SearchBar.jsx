import  useRecipeStore  from './recipeStore';

const SearchBar = () => {
    const { setSearchTerm, setIngredientFilter, setCookingTimeFilter } = useRecipeStore();
    const handleSearch = (e)=> (setSearchTerm(e.target.value))
    const handlesetIngredientFilter = (e)=> (setIngredientFilter(e.target.value))
    const handleCookingTimeFilter = (e)=> (setCookingTimeFilter(e.target.value))

    return (
      <>
    <input type="text"placeholder="Search recipes..." onChange={handleSearch}/>
    <input type="text" placeholder="Filter by ingredient..." onChange={handlesetIngredientFilter}/>
    <input type="number" placeholder="Max cooking time..." onChange={handleCookingTimeFilter}/>
        
      </>
   
  );
};
export default SearchBar
