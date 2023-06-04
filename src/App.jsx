import { useState } from 'react';
import Todo from './Todo';
import loaderimg from '../src/images/loader.png'

function App() {
  
  const currYear= new Date().getFullYear();
  const[year, setYear]= useState(currYear)

  setInterval(()=>{
    const currYear= new Date().getFullYear();
    setYear(currYear)
  },1000)

  return (
    <div className="container">
      
      <div className="year">
        <h1>
         <img src={loaderimg} alt="img" /> {year} <img src={loaderimg} alt="img" />
         </h1>
      </div>
      
      <Todo />
      
    </div>
  );
}

export default App;
