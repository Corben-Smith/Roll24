import React, {useRef, useState} from 'react';

import './site.css'




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
      </div>
  )
}