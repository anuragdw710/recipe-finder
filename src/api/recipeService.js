import axios from 'axios';

const API_KEY= '5d595b3ddfd7412d8e5f31f0e0761231'

export const seachRecipe = async (ingredients) =>{
    try{
        const response = await axios.get(
            `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredients}`
            );
            return response.data
    }catch (error){
        console.log(error);
        throw error
    }
};

export const getRecipeById = async (recipeId) =>{
    try{
        const response =await axios.get(
            'https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}'
        );
        return response.data;
    }catch (error){
        console.log(error);
        throw error
    }
};