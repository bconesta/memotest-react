import './App.css';
import Home from './pages/Home';
import Memotest from './pages/Memotest';
import End from './pages/End'
import { useState } from 'react';

function App() {

  const[page, setPage] = useState(0);
  const[time, setTime] = useState(60);
  const[points, setPoints] = useState(0);

  function randomize(cant){
    let array = [];
    while(array.length<cant){
        const num = Math.floor(Math.random()*cant)
        if(!array.includes(num)){
            array.push(num)
        }
    }
    return(array)
  }

  function handlePage(p){setPage(p)}
  function handleTime(t){setTime(t)}
  function handlePoints(s){setPoints(s)}

  return (
    <div className="App">
      {page === 0 && <Home handlePage={handlePage} handleTime={handleTime} />}
      {page === 1 && <Memotest handlePage={handlePage} handlePoints={handlePoints} order={randomize(16)} time={time} />}
      {page === 2 && <End handlePage={handlePage} points={points} />}
      
    </div>
  );
}

export default App;
