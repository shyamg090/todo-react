import { useState } from 'react';
import Todo from './Todo';
import loaderimg from '../src/images/loader.png'

function App() {
  
  const currYear= new Date().getFullYear();
  const[year, setYear]= useState(currYear)
  const currMonth= new Date().getMonth();
  const[month, setMonth]=useState(currMonth+1)
  const currDate= new Date().getDate();
  const[date, setDate]=useState(currDate)

  setInterval(()=>{
    const currYear= new Date().getFullYear();
    setYear(currYear)
    const currMonth= new Date().getMonth();
    setMonth(currMonth+1)
    // since months start with 0-11 add +1 so it becomes 1-12
    const currDate = new Date().getDate();
    setDate(currDate)
  },1000)

  return (
    <div className="container">
      
      <div className="year">
        <h1>
         <img src={loaderimg} alt="img" />{date}/{month}/{year}<img src={loaderimg} alt="img" />
         </h1>
      </div>
      
      <Todo />
      
    </div>
  );
}

export default App;