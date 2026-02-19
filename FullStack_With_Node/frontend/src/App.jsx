import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  async function getFetchData() {
    try{
      setLoading(true);
      const serverData = await fetch('http://localhost:4002/data');
      const jsonData = await serverData.json();
      setData(jsonData.msg);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
    finally{
      setLoading(false);
    }
  } 
  return (
    <>
      <h2>Welcome to the Node Fetch API</h2>
      <div class="container" >
      {
        data.map((ele)=>(
            <div className="card" key={ele.id}>
              <img src={ele.image} height={100} width={200}/>
              <h2>{ele.id}:{ele.title}</h2>
              <p>{ele.price}</p>
              <button>Add to Cart</button>
          </div>
        ))
      }
      </div>
      {/* {JSON.stringify(data)} */}
      <button onClick={getFetchData}>Fetch Data</button>
      {
        !loading?(<></>):(<h2>Data is loading...</h2>)
      }
    </>

  )
}

export default App