import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../data.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json();
        setRecipes(data);
      
      } catch (error){`Error fetching data:`,error}
    };
    fetchData();
    
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome to the Recipe App</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Link to={`/recipes/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{recipe.title}</h2>
                <p className="text-gray-700">{recipe.summary}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};


export default HomePage;
