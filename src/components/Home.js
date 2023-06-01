import React, { useState } from 'react';
import { seachRecipe } from '../api/recipeService';
import Recipes from './Recipes';

const Home = () => {
  const [ingredients, setIngredients] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const results = await seachRecipe(ingredients);
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching recipes:', error);
    }
  };

  return (
    <div>
      <h1>Recipe Finder</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter ingredients..."
          value={ingredients}
          onChange={(event) => setIngredients(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <Recipes searchResults={searchResults} />
    </div>
  );
};

export default Home;
