import React, {useEffect, useRef, useState} from 'react';
import {DndContext} from '@dnd-kit/core';

import {Droppable} from './Droppable';
import {Draggable} from './Draggable';
import './site.css'

import Map from '../Scripts/Map'  
import Token from '../Scripts/Token';
import Status from '../Scripts/Status';
import { PhotoInput } from './PhotoInput';


export default function PreviewBoard(props) {
  const [boardMap, setBoardMap] = useState(props.map);
  const [tokens, updateTokens] = useState(map.tokens);
  const [dimensions, setDimensions] = useState({ width: 'auto', height: 'auto' });
  const [cellDimensions, setCellDimensions] = useState({ width: map.cellDimensions[0] + 'px', height: map.cellDimensions[1] + 'px' });
  const held = useRef(null);

  useEffect(() => {
      const img = new Image();
      img.onload = () => {
        setDimensions({ width: img.width + 'px', height: img.height + 'px' });
      };
      img.src = boardMap.image
    });
  
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
    <div>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="flex flex-wrap text-black" style={{ backgroundImage: `url(${boardMap.image})`, width: dimensions.width, height: dimensions.height}} >
        {containers.map((id) => (
          <Droppable className="flex-shrink-0 border-1 border-solid border-black-rgba" w={cellDimensions.width} h={cellDimensions.height} key={id} id={id}>
            {tokens.map(token =>
              token.id === id ? <Draggable className="h-full w-full text-center text-black bg-cover bg-center" id={token.id} token={token} ></Draggable> : null  
            )} 
          </Droppable>
          ))}
        </div>
      </DndContext>
    </div>
  );
};