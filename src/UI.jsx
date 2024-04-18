import React, {useRef, useState} from 'react';

import './site.css'
import Token from '../Scripts/Token';




export default function UI(props) {
  const [sizeX, setSizeX] = useState(10);
  const [sizeY, setSizeY] = useState(10);
  const [rolledNumber, setRolled] = useState(null);
  const [playerToken, setPlayerToken] = useState([])

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

  function TokenCreator(name, image, status, armourClass, healthPoints, initiative){
    
    try {
      Token(name, image, status, armourClass,healthPoints,initiative);
    }
    catch(e)
    {""}
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
        <div className="bg-white flex flex-col text-center items-end justify-center my-8">
          <h1>ROLLER</h1>
          <div className="grid grid-cols-5 gap-4 justify-right object-contain text-right">
            <button onClick={() => Roll(20)}><img className="w-10" src="icons/d20.svg" alt="Twenty Sided Dice" /></button>
            <button onClick={() => Roll(12)}><img className="w-10" src="icons/d20.svg" alt="Twenty Sided Dice" /></button>
            <button onClick={() => Roll(8)}><img className="w-10" src="icons/d20.svg" alt="Twenty Sided Dice" /></button>
            <button onClick={() => Roll(6)}><img className="w-10" src="icons/d20.svg" alt="Twenty Sided Dice" /></button>
            <button onClick={() => Roll(4)}><img className="w-10" src="icons/d20.svg" alt="Twenty Sided Dice" /></button>
            <button onClick={() => Roll(100)}><img className="w-10" src="icons/d20.svg" alt="Twenty Sided Dice" /></button>
          </div>
          <h1>{rolledNumber + 1}</h1>
        </div>
        <div className="bg-white flex flex-col text-left items-left justify-right my-8">
          <h1>Token Creator</h1>
          <label>PlayerName:</label>
          <input type = "text" id = "playerName" name = "playerName" onChange={playerName}></input>
          <label>TokenImage:</label>
          <input type = "file" id = "tokenImage" name = "tokenImage"></input>
          <label>Conditions:</label>
          <input type = "text" id = "condition" name = "condition"></input>
          <label>Armour Class:</label>
          <input type = "number" id = "tokenAC" name = "tokenAC" min = "0" max = "50"></input>
          <label>Health Points:</label>
          <input type = "number" id = "tokenHP" name = "tokenHP" min = "0" max = "2000"></input>
          <button onClick={() => TokenCreator(playerName, tokenImage, condition, tokenAC, tokenHP)}>Submit</button>
        </div>
      </div>
  )
}