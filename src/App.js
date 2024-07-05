import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [btnState, setbtnState] = useState(0);
  const handleClick = (value) => {
    setbtnState(btnState+value);
  }
  const resetState = ()=>{
    setbtnState(0);
  }
  return (
    <>
      <button onClick={()=>handleClick(1)}>This is a button</button>
      <p>Button State: {btnState}</p>
      <button onClick={()=>handleClick(5)}>This button increases state by 5</button>
      <p>Button State: {btnState}</p>
      <button onClick={resetState}>Reset State</button>
    </>
  );
}

export default App;
