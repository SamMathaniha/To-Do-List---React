import React from 'react';
import ItemList from './ItemList';
import "./ListAndKey.css"



const ListAndKeys = ({items, handleCheck, handleDelete}) => {
  
  return (
    <div className='Container'>  {/* Container div for styling purposes */}
      {/* Conditional rendering: If the items array is not empty, render the list; otherwise, display a message */}
      {(items.length) ? (
        <ItemList 
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}/>
        
      ) : (
        <p>Your list is Empty</p>  // Message displayed when the items array is empty
      )}
    </div>
  );
};

export default ListAndKeys;
