import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)

  let myobj = {
   username:"adithya",
   age: 18
  }

  return (
    <>
     <h1 className='bg-green-400  text-black p-4 rounded-xl'>adithya</h1>
          
          <Card usernamee="adithya"  email="adithyaa@gmail.com" /> 
          <Card />

    
     
    </>
  )
}

export default App
