import React, {useRef, useState} from 'react';

import './site.css'
import Token from '../Scripts/Token';
import Sidebar from './Sidebar';



export default function Effects(props) {
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
        <Sidebar></Sidebar>
      </div>
  )
}