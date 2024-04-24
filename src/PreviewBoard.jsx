import React, {useEffect, useRef, useState} from 'react';
import {DndContext} from '@dnd-kit/core';

import {Droppable} from './Droppable';
import {Draggable} from './Draggable';

import Map from '../Scripts/Map'  
import Token from '../Scripts/Token';
import Status from '../Scripts/Status';
import { PhotoInput } from './PhotoInput';
import { KeepScale } from 'react-zoom-pan-pinch';


export default function PreviewBoard(props) {
  const [boardMap, setBoardMap] = useState(props.map !== null ? props.map : Map.ParseJson(localStorage.getItem('savedMap')));
  const [tokens, updateTokens] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 'auto', height: 'auto' });
  const [cellDimensions, setCellDimensions] = useState({ width: '100px', height: '100px' });
  const held = useRef(null);
  const [scale, setScale] = useState(props.scale)

  const increaseScale = () => setScale(prevScale => prevScale * 1.1); // Increase scale by 10%
  const decreaseScale = () => setScale(prevScale => prevScale / 1.1);

  useEffect(() => {
    console.log(boardMap)
    setBoardMap(props.map)
  }, [props.map])


  useEffect(() => {
    console.log("chaning")
    updateTokens(boardMap.tokens);
    setCellDimensions({ width: boardMap.cellDimensions[0] + 'px', height: boardMap.cellDimensions[1] + 'px' });

    const img = new Image();
    img.onload = () => {
      console.log(img.width/37)
      setDimensions({ width: img.width + 'px', height: img.height + 'px' });
    };
    img.src = `http://localhost:3000/uploads/${boardMap.image}`;
  }, [boardMap]);
  

  let containers = [];
  const parentWidth = parseInt(dimensions.width, 10); 
  const parentHeight = parseInt(dimensions.height, 10); 
  const cellWidth = parseInt(cellDimensions.width, 10);
  const cellHeight = parseInt(cellDimensions.height, 10); 
  
  for (let index = 1; index <= (parentWidth / cellWidth) * (parentHeight / cellHeight) -1 ; index++) {
    containers.push(index);
  } 

    //when token is dropped
  function handleDragEnd(event) {    
    const {over} = event;
    let check = false
    tokens.forEach(token => {
      if(token.id === over.id){
        check = true
        console.log(boardMap)
      }
    });
    if(!check){
      const updatedTokens = tokens.map(token =>
        token.id === held.current ? { ...token, id: over.id } : token
      )
      updateTokens(updatedTokens)
    }
    held.current = null;
  }

  //when token is picked up
  function handleDragStart(event){
    held.current = event.active.id
  }

  return (
    <div className='bg-black'>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="flex flex-wrap text-black origin-top-left" style={{ transform: `scale(${scale})`, background: `url(http://localhost:3000/uploads/${boardMap.image})`, width: dimensions.width, height: dimensions.height}} >
        {containers.map((id) => (
          <Droppable className="flex-shrink-0 border-2 border-solid border-blck-rgba" w={cellDimensions.width} h={cellDimensions.height} key={id} id={id}>
            {tokens.map(token =>
              token.id === id ? <Draggable className="h-full w-full text-center text-black bg-cover bg-center" scale={1/scale} id={token.id} token={token} ></Draggable> : null  
            )} 
          </Droppable>
          ))}
        </div>
      </DndContext>

      <div className='fixed flex items-center justify-center w-12 h-12 rounded-full right-12 bottom-4 bg-dark-green text-white text-5xl mx-8'>
        <button 
          className='flex items-center justify-center w-full h-full focus:outline-none focus:ring-2 focus:ring-white'
          onClick={increaseScale}>
          +
        </button> 
      </div>
      <div className='fixed flex items-center justify-center w-12 h-12 rounded-full right-4 bottom-4 bg-dark-green text-white text-5xl'>
        <button 
          className='flex items-center justify-center w-full h-full focus:outline-none focus:ring-2 focus:ring-white'
          onClick={decreaseScale}>
          -
        </button> 
      </div>  
    </div>
  );
}