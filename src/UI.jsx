import React, {useRef, useState} from 'react';

import './site.css'




export default function UI(props) {
  const [sizeX, setSizeX] = useState(10);
  const [sizeY, setSizeY] = useState(10);
  const [rolledNumber, setRolled] = useState(null);

  function handleSubmit(event){
    event.preventDefault()
  }

  function handleChangeX(event){
    setSizeX(event.target.value)
  }
  function handleChangeY(event){
    setSizeY(event.target.value)
  }

  function Roll(number){
    setRolled(Math.floor(Math.random() * number))
  }

  return(
      <div>      
        <form onSubmit={handleSubmit}>        
          <label>
            SizeX:
            <input type="number" value={sizeX} onChange={handleChangeX}/>        
          </label>
          <label>
            SizeY:
            <input type="text" value={sizeY} onChange={handleChangeY}/>        
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className="bg-white flex flex-col text-center items-center justify-center my-8">
          <h1>ROLLER</h1>
          <div className="grid grid-cols-5 gap-4 justify-center object-contain text-center">
            <button onClick={() => Roll(20)}><img className="w-10" src="icons/d20.svg" alt="Twenty Sided Dice" /></button>
            <button onClick={() => Roll(12)}><img className="w-10" src="icons/d20.svg" alt="Twenty Sided Dice" /></button>
            <button onClick={() => Roll(8)}><img className="w-10" src="icons/d20.svg" alt="Twenty Sided Dice" /></button>
            <button onClick={() => Roll(6)}><img className="w-10" src="icons/d20.svg" alt="Twenty Sided Dice" /></button>
            <button onClick={() => Roll(4)}><img className="w-10" src="icons/d20.svg" alt="Twenty Sided Dice" /></button>
            <button onClick={() => Roll(100)}><img className="w-10" src="icons/d20.svg" alt="Twenty Sided Dice" /></button>
          </div>
          <h1>{rolledNumber + 1}</h1>
        </div>
      </div>
  )
};