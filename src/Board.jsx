import React, {useEffect, useRef, useState} from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
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
  const [selectedImageT, setSelectedImageT] = useState(localStorage.getItem("savedImageT"));
  const [boardMap, setBoardMap] = useState(null);
  const [tokens, updateTokens] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 'auto', height: 'auto' });
  const [cellDimensions, setCellDimensions] = useState({ width: '100px', height: '100px' });
  const held = useRef(null);

  useEffect(() => {
    console.log("sinsssse")

    if (selectedImage && selectedImageT) {
      console.log("sinse")
      const map = new Map(selectedImage, [new Token(1, "Corben", selectedImageT, new Status("Bloodied", "#FF0000"), 10, 10, 10), new Token(2, "Corben", selectedImageT, new Status("None", "None"), 10, 10, 10)], [170.6666667, 170.6666667]);
      setBoardMap(map);
      updateTokens(map.tokens);
      setCellDimensions({ width: map.cellDimensions[0] + 'px', height: map.cellDimensions[1] + 'px' });

      const img = new Image();
      img.onload = () => {
        setDimensions({ width: img.width + 'px', height: img.height + 'px' });
      };
      img.src = selectedImage;

    }
  }, [selectedImage] && [selectedImageT]);
  
  useEffect(() => {
          
    console.log(dimensions)
    console.log(cellDimensions)

    console.log(tokens)
  })

  const reader = new FileReader();
  reader.onloadend = function() {
    console.log("url")
    localStorage.setItem('savedImageT', reader.result);
  };

  
  function handleImageUpload(event){
      const url = URL.createObjectURL(event.target.files[0]);
      reader.readAsDataURL(event.target.files[0])
      const img = new Image();
      img.onload = () => {
        setSelectedImageT(url);
      };
      img.src = url;
  }

  let containers = [];
  const parentWidth = parseInt(dimensions.width, 10); 
  const parentHeight = parseInt(dimensions.height, 10); 
  const cellWidth = parseInt(cellDimensions.width, 10);
  const cellHeight = parseInt(cellDimensions.height, 10); 
  
  for (let index = 1; index <= (parentWidth / cellWidth) * (parentHeight / cellHeight) -1 ; index++) {
    containers.push(index);
  } 

  return (
    <div>
      <input type="file" name="myImage" onChange={handleImageUpload}/>
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <div className="flex flex-wrap text-black" style={{ backgroundImage: `url(${selectedImage})`, width: dimensions.width, height: dimensions.height}} >
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