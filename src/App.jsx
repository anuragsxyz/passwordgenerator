import React, { useState } from "react";
import './index.css'
import Card from "./Card";

function App() {

 let [initialValue, setinitialValue] = useState(0);
let checkObject = [{
    username : "Anurag",
    age : 52,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, vero quasi? Laudantium eum, modi quod accusantium architecto aliquam totam asperiores eligendi aspernatur beatae molestiae, vel, natus nemo mollitia fugiat quo."

},

{
    username : "Anurasdasdag",
    age : 52,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, vero quasi? Laudantium eum, modi quod accusantium architecto aliquam totam asperiores eligendi aspernatur beatae molestiae, vel, natus nemo mollitia fugiat quo."


},
{
    username : "Anurasdasdag",
    age : 52,
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, vero quasi? Laudantium eum, modi quod accusantium architecto aliquam totam asperiores eligendi aspernatur beatae molestiae, vel, natus nemo mollitia fugiat quo."

},

];


  const addValue = () => {
      initialValue = initialValue + 1
      
      setinitialValue(
          initialValue
      )   ;
console.log(initialValue);
  };

  const reduceValue = () => {
      
      if(initialValue == 0){
        initialValue;
      }
      else {
        initialValue = initialValue - 1
setinitialValue(
          initialValue
      )   ;
      }
      
console.log(initialValue);
  };


  return (
<div className="flex items-center justify-center h-screen">


     
<Card username={checkObject[1].username} desc={checkObject[1].desc}/>
    
        
  
  </div>)
}

export default App
