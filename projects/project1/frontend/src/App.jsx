import { searchRecipes } from "./services/recipeService";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  useEffect(() => {
    const fetchInitialRecipes = async () => {
      console.log("Fetching initial data...");

      const recipes = await searchRecipes("pasta");

      console.log("Fetched Recipes:", recipes);
    };

    fetchInitialRecipes();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:recipeId" element={<RecipePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
