import './App.css'
import { useState } from 'react';
let estado = false;

function Square(){
  
  const [value, setValue] = useState(null);

  function handleClick(){
    if(value == null){
      setValue(estado?"X":"O");
      estado = !estado;
    }
    
    
    
  }

  return(
    <button className='square' onClick={handleClick}>
    {value}
    </button>
  )
}



export default function Board() {
  
  return (
    <>
    <div className='board-row'>
    <Square/>
    <Square/>
    <Square/>
    </div>    
    <div className='board-row'>
    <Square/>
    <Square/>
    <Square/>
    </div>
    <div className='board-row'>
    <Square/>
    <Square/>
    <Square/>
    </div>
    </>
  )
}
