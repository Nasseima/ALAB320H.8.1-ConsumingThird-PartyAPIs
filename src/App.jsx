import { useState, useEffect } from 'react'
import StarshipCard from './components/StarshipCard'
import { getAllStarships } from './services/sw-api'
import './App.css'

function App() {
  const [startships, setStarship] = useState([]);
  const [nextPage, setNextPage] = useState(null)
  const [loading, setLoading] = useState(true)



  const url = 'https://swapi.dev/api/starships/';
  
  const fetchStarships = async() =>{
    try{
      setLoading(true)
      const data = await getAllStarships(url);
      setStarship(prev => [...prev, ...data.results]);
      setNextPage(data.next);
    }catch(e){
      console.error(e)
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchStarships();
  }, [])

const loadMoreStarships = () =>{
  if(nextPage){
    const fetchMore = async() =>{
      try{
        setLoading(true)
        const data = await getAllStarships(nextPage);
        setStarship(prev => [...prev, ...data.results]);
        setNextPage(data.next);
      }catch(e){
        console.error(e)
      }finally{
        setLoading(false)
      }
    };
    fetchMore();
  }
};
if(loading && !startships.length){
  <div>Loading ...</div>
}

  return (
    <>
   <div className='text-center'>
   <h1 className='uppercase absolute top-0 w-full bg-blue-950 p-2 mb-4 text-white text-3xl text-center'>Start Wars StartShips</h1>
     <div className='flex flex-wrap mt-12 justify-center'>
    {startships.map((startship)=>
    <StarshipCard starship={startship} /> 
  )}
  
    
     </div>
     <button onClick={loadMoreStarships} className='btn border-orange-500 bg-orange-200 font-bold p-4 rounded-lg m-4 hover:bg-orange-500'>
      {
      loading ? 'Loading...' : 'Load More Startships'
    }
    </button>
   </div>
    </>
  )
}

export default App
