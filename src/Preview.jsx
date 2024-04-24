import React, {useEffect, useRef, useState} from 'react';

import './site.css'
import Token from '../Scripts/Token';
import Map from '../Scripts/Map'
import Sidebar from './Sidebar';
import PreviewBoard from './PreviewBoard'
import ConditionSelect from './ConditionSelect';
import Status from '../Scripts/Status';


export default function Preview(props) {
  const [map, setMap] = useState(Map.ParseJson(localStorage.getItem('savedMap')))
  const [cellWidth, setCellWidth] = useState(map.cellDimensions[0]);
  const [cellHeight, setCellHeight] = useState(map.cellDimensions[1]);

  const handleCellWidthChange = (event) => {
    if(event.target.value > 0){
      setCellWidth(event.target.value);
    }
  };

  const handleCellHeightChange = (event) => {
    if(event.target.value > 0){
      setCellHeight(event.target.value);
    }
  };

  const handleCellTest = (event) => {
    setMap(Map.ParseJson(localStorage.getItem("savedMap")))
    if(cellHeight > 50 && cellWidth > 50){    
      setMap((map) => {
      const updatedMap = { ...map };
      updatedMap.cellDimensions = [cellWidth, cellHeight];
      return updatedMap;
    })
    console.log(map)
    }
  }

  function updateMap(){
    setMap(Map.ParseJson(localStorage.getItem("savedMap")))
    setMap((map) => {
      const updatedMap = { ...map };
      updatedMap.cellDimensions = [cellWidth, cellHeight];
      return updatedMap;})

    const updatedMap = {
      ...map,
      cellDimensions: [cellWidth, cellHeight] // Assuming 'tokens' is the updated array you want to save
    };
    localStorage.setItem("savedMap", JSON.stringify(updatedMap))
  }

  function handleConditionSelect(tokenIn, event){
    console.log("as")
    const updatedTokens = map.tokens.map(token =>
      token.id === tokenIn.id ? { ...token, status: new Status(event.target.value, Status.ToColor(event.target.value)) } : token
    )

    setMap(Map.ParseJson(localStorage.getItem("savedMap")))
    setMap((map) => {
      const updatedMap = { ...map };
      updatedMap.tokens = updatedTokens;
      return updatedMap;})

    const updatedMap = {
      ...map,
      tokens: updatedTokens
    };
    localStorage.setItem("savedMap", JSON.stringify(updatedMap))
  }
  

  return(
      <div className='flex w-[100vw] h-[100vh] items-center'>
        <Sidebar/>
        <div className='h-[90vh] w-[80vw] p-6 mx-auto bg-blue rounded-md shadow-md '>        
          <div className='h-[45vh] overflow-scroll'>
            <PreviewBoard scale={.5} map={map}/>
          </div>
          <div className='grid grid-cols-3 gap-4 mt-8 text-2xl'>
            <div className='flex items-center flex-col w-full h-full'>
              <form className="max-w-sm mx-auto w-full">
                <label htmlFor="cell-width-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cell Width</label>
                <input
                  type="number"
                  id="cell-width-input"
                  value={cellWidth}
                  onChange={handleCellWidthChange}
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder=""
                />
              </form>
              <form className="max-w-sm mx-auto w-full">
                <label htmlFor="cell-height-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cell Height</label>
                <input
                  type="number"
                  id="cell-height-input"
                  value={cellHeight}
                  onChange={handleCellHeightChange}
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder=""
                />
              </form>
              <button onClick={handleCellTest} className='bg-white rounded-xl shadow-lg w-auto mt-5 px-8 border-solid border border-black' >Test Changes</button>
              <button onClick={updateMap} className='bg-white rounded-xl shadow-lg w-auto mt-5 px-8 border-solid border border-black' >Submit Changes</button>
            </div>
            <div className='border border-solid border-dark-green col-span-2 h-[35vh] overflow-x-auto'>
              <div className='grid grid-cols-3 w-full text-center text-bold'>
                {map.tokens.map((token) => (
                  <div key={token.id} className='flex flex-col items-center p-4 object-contain'>
                    <h1 className='text-white'>{token.name}</h1>
                    <img className='h-[20vh]' src={`http://localhost:3000/uploads/${token.image}`} />
                    <ConditionSelect onChange={(event) => handleConditionSelect(token, event)} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
  )
}