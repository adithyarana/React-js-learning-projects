import { useCallback, useState , useEffect, useRef} from 'react'


function App() {
  const [length , setlength] = useState(8)
 const [number,setnumber]=useState(false);
 const [charallowed, setcharallowed]=useState(false);
 const [password, setpassword]=useState("")

 // useref hook

const passref=useRef(null);

  const generatePassword = useCallback(()=>{

    let pass=""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if( number) str+="0123456789"
    if(charallowed) str+="!@#$%^&*(){}[]"

    for(let i=1 ;i<=length ;i++){

      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char);
    }

    setpassword(pass)

  } ,[length, number, charallowed,setpassword])

  // this function is used to generate copy of password 

  const copypasstoclipboard= useCallback(()=>{
    passref.current?.select()
    passref.current?.setSelectionRange(0,auto)
    window.navigator.clipboard.writeText(password)
    alert('Password has been copied to clipboard')
    
  },[password])



useEffect(()=>{
  generatePassword();
},[length, number, charallowed, generatePassword])

  return (
    <>
    

    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-700 text-orange-500'>
  <h1 className='text-center text-white my-3'>Password Generator</h1>

  <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
    <input
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder="password"
      readOnly
      ref={passref}
    />
 <button 
 onClick={copypasstoclipboard}
 className='outline-none bg-blue-700 text-white px-3 py-0.5
  shrink-0'>copy</button>

  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input type="range"
      min={6}
      max={100}
      value={length} 
      className='cursor-pointer'
      onChange={(e)=>{setlength(e.target.value)}}
      />
      <label>lenght: {length}</label>
    </div>

    <div className='flex items-center gap-x-1'>
      <input type="checkbox"
      defaultChecked={number}
      id='numberinput'
      onChange={()=>{
        setnumber((prev)=>!prev)
      }} />
      <label htmlFor="numberinput">Numbers</label>
    </div>

    <div className='flex items-center gap-x-1'>
      <input type="checkbox"
      defaultChecked={charallowed}
      id='charinput'
      onChange={()=>{
        setcharallowed((prev)=>!prev)
      }} />
      <label htmlFor="charinput">Special Characters</label>
    </div>

  </div>
</div>

    </>
  )
}

export default App
