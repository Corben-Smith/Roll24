import React from 'react';
import './site.css'

export function PhotoInput(props) {
  const reader = new FileReader();
  reader.onloadend = function() {
    console.log(`${props.fileName} is being saved in cache`)
    localStorage.setItem(props.fileName, reader.result);
  };

  function handleImageUpload(event){
    reader.readAsDataURL(event.target.files[0])

    if(props.state !== null){     
    const baseString = URL.createObjectURL(event.target.files[0]);
    const img = new Image();

    img.onload = () => {
      props.state(baseString)
    };
    img.src = baseString
    }
  }

  return (
    <input type="file" onChange={handleImageUpload}/>
  );
}