import React, { useState, useEffect, useCallback, useRef } from "react";
import './index.css'


function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(true);
  const [password, setPassword] = useState();

// useRef Hook

const passwordRef = useRef(null);



  const passwordGenerator = useCallback(() => {
  let pass = '';
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

if(numberAllowed) str += '1234567890';
if(charAllowed) str += '!@#$%^&*()_+~';

for (let i = 1; i <= length; i++) {
  let char = Math.floor(Math.random() * str.length + 1);
  pass += str.charAt(char);

  
  
}
setPassword(pass);

  },[length, numberAllowed, charAllowed, setPassword]  );


 useEffect(() => {
  passwordGenerator;

 }, [length, numberAllowed, charAllowed, setPassword]);

const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select();
 
window.navigator.clipboard.writeText(password);


},
[password])



  return (

    <div className="place-content-center text-center h-svh w-full bg-gray-100 font-mono font-semibold">
      <h1 >Get a New Password</h1>
      <div className="w-full max-w-md mx-auto rounded-lg px-3 py-8 text-orange-500 ">
    
        
        <div className="flex shadow-lg rounded-lg overflow-hidden mb-4">
        <input type="text" 
        value={password}
          className="outline-none w-full px-3 py-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
         />
         <button className="bg-blue-100  place-content-center px-3 shrink-0" onClick={copyPasswordToClipboard}> 
         Copy
         </button>
        
        </div>
       <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={8} max={20} value={length} className="cursor-pointer"
              onChange={(e) => {
               setLength(e.target.value);
                console.log(e);
                
              }}
            />
              <label>lenght: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" className="cursor-pointer"
              onChange={() => {
                setNumberAllowed((prev)=> !prev);
              }}  
              
            />
              <label>Numbers </label>
          </div>  <div className="flex items-center gap-x-1">
              <input type="checkbox" defaultChecked={charAllowed} id="numberInput" className="cursor-pointer"
              onChange={() => {
               setcharAllowed((prev) => !prev)
              }}  
              
            />
              <label> Character</label>
          </div>
        </div>
      </div>
      <button onClick={passwordGenerator} className="shrink-0 outline-blue-500 bg-slate-900 p-5 rounded-md shadow-lg font-bold text-white hover:bg-slate-500">Generate</button>
       
    </div>
 )
}

export default App
