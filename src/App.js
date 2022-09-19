import { React, useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {
  const API_ID = process.env.API_ID;
  const API_KEY = process.env.API_KEY;
  

  const [Recipes, setRecipes] = useState([]);
  const [search, setsearch] = useState('');
  const [query, setquery] = useState('chiken')

  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }
  const handelChange=(e)=>{
    setsearch(e.target.value); 
    //console.log(search)
  }

  const getsearch=(e)=>{
      e.preventDefault();
      setquery(search);
      setsearch('')
  }

  return (
    <div className='App'>
      
      <form className='search-form' onSubmit={getsearch}>
        <input className='search-bar' type="text" value={search} onChange={handelChange}/>
        <button className='search-button' type="submit" >submit </button>
       
      </form>
      <div className='recipes'>
      {Recipes.map((recipes)=>(
           <Recipe key={recipes.recipe.label}
                  title={recipes.recipe.label} 
                  calories={recipes.recipe.calories}
                  image={recipes.recipe.image}
                  ingredients={recipes.recipe.ingredients}/>
      ))}
      </div>
      
    </div>

  );
}

export default App;
