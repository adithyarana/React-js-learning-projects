import { useState } from 'react' // hooks 

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// this is the small projetc for usestate hooks

function App() {

  const [counter , setcounter] = useState(15) // syntax
  
  // in react from 
  // let counter = 5;

  //use state helps to update the value and and state

  const addvalue =()=>{
    console.log("counter", counter)
    setcounter(counter + 1)
    if(counter===20){
      alert("counter reached 20")
      setcounter(20) // to prevent further increment operation
    }
    
  }

  const removevalue =()=>{
    console.log("counter", counter)
    setcounter(counter - 1)
    if(counter===0){
      alert("counter reached zero")
      setcounter(0) // to prevent negative counter 
      
      // this will prevent further decrement operation
      return;  // return statement stops the function from executing further
    }
    
  }

  return (
    <>
      <h1>chai or react</h1>
      <h2>counter value: {counter}</h2>

      <button
      onClick={addvalue}
    >add value:{counter}</button>
      <br />
      <button onClick={removevalue}>remove value: {counter}</button>
      <footer> footer:{counter}</footer>
      
    </>
  )
}

export default App
