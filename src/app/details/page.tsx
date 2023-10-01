import React from 'react';
import Details from '../components/Details/Details.js';

export default function DetailsPage(){
  const character = {id:1, name: "Yoda", player: "Frank Oz"};
  return (
    <div className='App'>
        <Details character={character}/>
    </div>
  )
}