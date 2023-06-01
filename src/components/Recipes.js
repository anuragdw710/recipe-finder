import React from 'react';

const Recipes = ({ searchResults }) => {
  return (
    <div>
      <h2>Search Results</h2>
      {searchResults.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>Extra Ingredients needed: {recipe.missedIngredients.map( (item)=>{
            return [item.name].join(',')
          } )}</p>
          <p>Instructions: {recipe.missedIngredients.map((item)=>{
            return [item.original].join(',');
          })}</p>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
