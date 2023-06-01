import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Recipes from './components/Recipes'
import RecipeDetails from './components/RecipeDetails'
import FavoriteRecipes from './components/FavoriteRecipes'
import ShoppingList from './components/ShoppingList'
import Navbar from './components/Navbar'


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path='/' Component={Home} />
      <Route exact path='/recipes' Component={Recipes} />
      <Route path='/recipes/:id' Component={RecipeDetails} />
      <Route path='/favorite' Component={FavoriteRecipes} />
      <Route path='/shopping-list' Component={ShoppingList} />
      </Routes>
    </Router>
  );
}

export default App;
