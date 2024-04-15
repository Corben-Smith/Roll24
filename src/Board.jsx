import React, {useRef, useState} from 'react';
import {DndContext} from '@dnd-kit/core';

import {Droppable} from './Droppable';
import {Draggable} from './Draggable';
import './site.css'

import Token from '../Token';


export default function Board(props) {
  let containers = [];
  for (let index = 1; index <= 80 * 10; index++) {
    containers.push(index);
  }


  const [tokens, updateTokens] = useState([
    { id: 1, token: new Token("Guy 1"), className: "h-full w-full text-center text-black"},
    { id: 2, token: new Token("Guy 2"), className: "h-full w-full text-center text-black"},
    { id: 3, token: new Token("Guy 3"), className: "h-full w-full text-center text-black"}

  ])

  const held = useRef(null)

  return (
      <DndContext className="flex w-full h-full overflow-y-scroll overflow-x-scroll touch-pinch-zoom object-contain" onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="flex-shrink-0 flex flex-wrap h-full w-full text-black" >
          {containers.map((id) => (
            <Droppable className="border-4 border-solid border-black-rgba w-[180px] h-[180px]" key={id} id={id}>
              {tokens.map(token =>
                token.id === id ? <Draggable className={token.className} id={token.id} token={token.token}></Draggable> : null  
              )}
          </Droppable>
          ))}
        </div>
      </DndContext>
  );

  function handleDragEnd(event) {
    console.log("here")
    
    const {over} = event;
    console.log("there")
    console.log(over.id)

    console.log(tokens)
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

    console.log("shere")
    held.current = null;
  }

  function handleDragStart(event){
    console.log("start")
    console.log(event.active.id)

    held.current = event.active.id
    console.log(held.current)
  }
};