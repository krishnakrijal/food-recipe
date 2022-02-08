
import { useEffect, useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import Axios from 'axios';
import RecipeDisplay from './components/RecipeDisplay';


function App() {
  const [search, setSearch] =useState("chicken");
  const [recipes, setRecipes] = useState([])
  const APP_ID = "3caa3fba";
  const APP_KEY = "61ff7aea182b9ee53cfc6ae70618956c";
  
  const onChange = e => setSearch(e.target.value);

  const getSearch=async()=>{
    const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    
   setRecipes(res.data.hits)
   
    }
  
  useEffect(()=>{
    getSearch();
  },[]);

  const onSearch =()=>{
    getSearch();
    }

 
 

  return (
    <div >
      <Heading onChange={onChange} onSearch={onSearch} search={search}/>
      <RecipeDisplay recipes={recipes}/>
      
    </div>
  );
}

export default App;
