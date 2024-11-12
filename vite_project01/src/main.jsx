import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MYAPP(){
    return(
        <div>
            <h1>My App</h1>
            <p>This is my first react app</p>
        </div>
    )
}

// this is the use of the createelement in react

const reactelement=React.createElement(
    'a',
    {href: 'http://google.com', target: '_blank' },
    'click me to visit google.com'
)


createRoot(document.getElementById('root')).render(
 
    <App />
  
)
