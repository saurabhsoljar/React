
import React,{ useState } from 'react'
import Navbar from './components/Navbar' 
import ProductCard from './components/ProductCard'
import Searchbar from './components/Searchbar'

function App() {
  const [allfood, setAllFood] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading]= useState(false);

  const fetchFood = async () => {
    try {
      const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=b9e10e10e33ca698c9db3bcfa97abc3f `)
    } catch (error) {
      
    }
  }

  return (
    <>
    <Navbar/>
    <Searchbar/>
    <ProductCard/>
    </>
  )
}

export default App
