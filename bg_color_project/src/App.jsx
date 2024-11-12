import { useState,useEffect } from "react"


//use state helps to create a state object that can be used to configure the component state after the component is rendered and

function App() {
  const initialColor = localStorage.getItem("bgColor") || "black";
  const [color, setcolor]=useState(initialColor)

  useEffect(() => {
    localStorage.setItem("bgColor", color);
  }, [color]);





  return (
  
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-2xl">
            <button
            onClick={()=>setcolor("red")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{backgroundColor:"red"}}>red</button>
            <button
              onClick={()=>setcolor("green")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{backgroundColor:"green"}}>green</button>
            <button
              onClick={()=>setcolor("blue")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{backgroundColor:"blue"}}>blue</button>
            <button
              onClick={()=>setcolor("orange")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{backgroundColor:"orange"}}>orange</button>
            <button
              onClick={()=>setcolor("white")}
            className="outline-none px-4 rounded-full text-black shadow-lg"
            style={{backgroundColor:"white"}}>white</button>
            <button
              onClick={()=>setcolor("black")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{backgroundColor:"black"}}>black</button>
            <button
              onClick={()=>setcolor("purple")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{backgroundColor:"purple"}}>purple</button>
          </div>
        </div>
      </div>
      
  
  )
}

export default App
