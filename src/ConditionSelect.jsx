import React, {useRef, useState} from 'react';
import {useEffect} from "react";
import ReactDOM from "react-dom/client";

import './site.css'
import Token from '../Scripts/Token';
import Status from '../Scripts/Status';
import { PhotoInput } from './PhotoInput';
import { renderIntoDocument } from 'react-dom/test-utils';



// Rip Statussies
export default function ConditionSelect(props) {
  const conditionsDropDown = document.getElementById("conditionsDropDown")
  const [conditions, setConditions] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.dnd5eapi.co/api/conditions");
        if (!response.ok) {
          throw new Error("Failed to fetch conditions");
        }
        const data = await response.json();
        setConditions(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return(
    <>
    <label className="text-white dark:text-gray-200" value="Status">Status</label>
    <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" id='conditionsDropDown' onChange={props.onChange}>
    <option value= "">None</option>
    {conditions.map((condition, index) => (
          <option key={index} value={condition.name}>{condition.name}</option>
        ))}
    </select>
    </>           
  )
}
