import React, {useEffect, useRef, useState} from 'react';
import {DndContext} from '@dnd-kit/core';

import {Droppable} from './Droppable';
import {Draggable} from './Draggable';
import './site.css'

import Map from '../Scripts/Map'
import Token from '../Scripts/Token';
import Status from '../Scripts/Status';


export default function Board(props) {
  //setting up information about the map
  /*
  const [selectedImage, setSelectedImage] = useState(localStorage.getItem("savedImage"))
  const [boardMap, setboardMap] = useState(new Map(selectedImage, [new Token(0,"Corben", selectedImage, new Status("None", "None"))], [500, 500]))
  const [tokens, updateTokens] = useState(boardMap.tokens)
  const [dimensions, setDimensions] = useState({ width: 'auto', height: 'auto' });
  const [cellDimensions, setCellDimensions] = useState({width: boardMap.cellDimensions[0] + 'px', height: boardMap.cellDimensions[1] + 'px' })
  const held = useRef(null)

  let idek = false
  useEffect(() => {
    console.log("mmm")

    if(!idek){
      const img = new Image();
      img.onload = () => {
        setDimensions({ width: img.width + 'px', height: img.height + 'px' });
      };
      img.src = selectedImage;
      idek = !idek
    }
  })
  */

  const [selectedImage, setSelectedImage] = useState(localStorage.getItem("savedImage"));
  const [boardMap, setBoardMap] = useState(null);
  const [tokens, updateTokens] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 'auto', height: 'auto' });
  const [cellDimensions, setCellDimensions] = useState({ width: '100px', height: '100px' });
  const held = useRef(null);

  useEffect(() => {
    if (selectedImage) {
      const map = new Map(selectedImage, [new Token(0, "Corben", selectedImage, new Status("None", "None"))], [500, 500]);
      setBoardMap(map);
      updateTokens(map.tokens);
      setCellDimensions({ width: map.cellDimensions[0] + 'px', height: map.cellDimensions[1] + 'px' });

      const img = new Image();
      img.onload = () => {
        setDimensions({ width: img.width + 'px', height: img.height + 'px' });
      };
      img.src = selectedImage;
    }
  }, [selectedImage]);
  
  const reader = new FileReader();
  reader.onloadend = function() {
    console.log("url")
    localStorage.setItem('savedImage', reader.result);

  };

  
  function handleImageUpload(event){
      const url = URL.createObjectURL(event.target.files[0]);
      reader.readAsDataURL(event.target.files[0])
      const img = new Image();
      img.onload = () => {
        setSelectedImage(url);
      };
      img.src = url;
  }
  

  let containers = [];
  for (let index = 1; index <= 80 * 10; index++) {
    containers.push(index);
  }

  return (
    <div className='bg-cover bg-center'>
      <input type="file" name="myImage" onChange={handleImageUpload}/>
      <DndContext className="w-full h-full flex overflow-y-scroll overflow-x-scroll touch-pinch-zoom object-contain" style={{ backgroundImage: `url(${selectedImage})`, width: dimensions.width, height: dimensions.height}} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="flex-shrink-0 flex flex-wrap h-full w-full text-black" >
          {containers.map((id) => (
            <Droppable className="border-4 border-solid border-black-rgba" style={{ width: cellDimensions.width, height: cellDimensions.height}} key={id} id={id}>
              {tokens.map(token =>
                token.id === id ? <Draggable className="h-full w-full text-center text-black" id={token.id} token={token.token}></Draggable> : null  
              )}
          </Droppable>
          ))}
        </div>
      </DndContext>
    </div>
  );



  //everything for handling drag and drop
  
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