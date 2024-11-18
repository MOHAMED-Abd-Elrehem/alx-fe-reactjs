import  useRecipeStore  from './recipeStore';

const SearchBar = () => {
    const { setSearchTerm, setIngredientFilter, setCookingTimeFilter } = useRecipeStore();
    const handleSearch = (e) => (setSearchTerm(e.target.value))
    const handlesetIngredientFilter = (e) => (setIngredientFilter(e.target.value))
    const handleCookingTimeFilter = (e) => (setCookingTimeFilter(e.target.value))

    return (
        <>
            <input
                type="text"
                placeholder="Search recipes..."
                onChange={handleSearch}
                style={{ paddingLeft: 20 }}
            />
            <input
                type="text"
                placeholder="Filter by ingredient..."
                onChange={handlesetIngredientFilter}
                style={{ paddingLeft: 20 }}
            />
            <input
                type="number"
                placeholder="Max cooking time..."
                onChange={handleCookingTimeFilter}
            />
        </>
    );
};
export default SearchBar
