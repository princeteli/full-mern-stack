import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import { searchRecipes } from "../services/recipeService";
import RecipeCard from "../components/RecipeCard";
import Loader from "../components/Loader";
import "./HomePage.css";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [searched, setSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query) => {
    setIsLoading(true);
    setSearched(true);
    try {
      const results = await searchRecipes(query);
      setRecipes(results);
    } catch (error) {
      console.error("Search failed:", error);
      setRecipes([]);
    } finally {
      setIsLoading(false);
    }
  };

  console.log("Current recipes in state:", recipes);
  return (
    <div className="home-page">
      <h1>Recipe Finder</h1>
      <p>Search for your favorite recipes here!</p>

      <SearchBar onSearch={handleSearch} />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="recipe-list">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))}
          </div>
          {searched && recipes.length === 0 && (
            <p className="no-results-message">
              No recipes found. Please try a different search term!
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
