import React, {useRef, useState} from 'react';

import './site.css'
import Token from '../Scripts/Token';
import Sidebar from './Sidebar';



export default function Roller(props) {
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
      <div className=' bg-blue flex flex-auto'>
        <Sidebar></Sidebar>
        <div className=" flex flex-col text-justify items-end my-8 float-start">
        <h1 className='mr-0 text-white'><b>ROLLER</b></h1>
          <div className=" grid grid-col-1 gap-1 float-right object-contain text-center border-solid border-2 ml-6 border-white rounded-3xl">
            <button onClick={() => Roll(20)} className='border-b-2 border-white'><img className="w-10 mx-2 mt-1" src="src\assets\diceImages\D20.png" alt="Twenty Sided Dice" /></button>
            <button onClick={() => Roll(12)} className='border-b-2 border-white'><img className="w-10 mx-2" src="src\assets\diceImages\D12.png" alt="Twelve Sided Dice" /></button>
            <button onClick={() => Roll(8)} className='border-b-2 border-white'><img className="w-10 mx-2" src="src\assets\diceImages\D10.png" alt="Ten Sided Dice" /></button>
            <button onClick={() => Roll(8)} className='border-b-2 border-white'><img className="w-10 mx-2" src="src\assets\diceImages\D8.png" alt="Eight Sided Dice" /></button>
            <button onClick={() => Roll(6)} className='border-b-2 border-white'><img className="w-10 mx-2" src="src\assets\diceImages\D6.png" alt="Six Sided Dice" /></button>
            <button onClick={() => Roll(4)} className='border-b-2 border-white'><img className="w-10 ml-2" src="src\assets\diceImages\D4.png" alt="Four Sided Dice" /></button>
            <button onClick={() => Roll(100)}><img className="w-12 mx-1" src="src\assets\diceImages\D100.png" alt="Hundred Sided Dice" /></button>
          </div>
          <h1 className=' mr-6 ml-13 text-white'>{rolledNumber + 1}</h1>
        </div>
      </div>
  )
}