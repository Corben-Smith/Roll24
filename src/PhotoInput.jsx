import React from 'react';
import './site.css'

export function PhotoInput(props) {
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = async () => {
      const imageData = reader.result;
      const img = new Image()
      img.onload = () =>{
      }

      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageData, imageName: file.name }),
      });
  
      if (response.ok) {
        console.log('Image uploaded successfully');
        img.src = imageData
      } else {
        console.error('Failed to upload image');
      }
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <input type="file" onChange={handleImageUpload}/>
  );
}