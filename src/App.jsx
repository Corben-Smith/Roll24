import React, {useRef, useState} from 'react';
import {DndContext} from '@dnd-kit/core';

import {Droppable} from './Droppable';
import {Draggable} from './Draggable';
import './site.css'
import Board from './Board';




export default function App() {
  const [sizeX, setSizeX] = useState(10);
  const [sizeY, setSizeY] = useState(10);

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
    <div className="flex flex- h-full w-full">
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
      <Board className="flex w-[80vw] h-[100vh] overflow-y-scroll overflow-x-scroll touch-pinch-zoom" sizeX={sizeX} sizeY={sizeY}></Board>
    </div>
  )
};