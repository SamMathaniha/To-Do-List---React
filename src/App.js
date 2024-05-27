import React from 'react'
import './App.css';
import Header from './Components/Header';
import ListAndKeys from './Components/ListAndKeys';
import Footer from './Components/Footer';
import { useState } from 'react';
import AddItem from './Components/AddItem';
import SearchItem from './Components/SearchItem';
/* import Content from './Components/Content'; */
import { useEffect } from 'react';


function App() {

  const API_URL = 'http://localhost:3500/items'
  // Set up state using useState hook to manage the list of items
  const [items, setItems] = useState( []
  );

  const [newItem, setNewItem] = useState('')
  const[search,setSearch] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const listItems = await response.json();
        setItems(listItems);
      } catch (err) {
        console.log(err.stack);
      }
    };
  
    fetchItems(); // Call fetchItems directly
  }, []);
  

  const addItem =(task) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = {id, checked:false, task}
    const listItems = [...items, addNewItem]
    setItems(listItems); 
   
  }


  // Function to handle toggling the checked status of an item
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);  // Update state with the modified items array
    
  };

  // Function to handle deleting an item from the list
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);  // Filter out the item with the specified id
    setItems(listItems);  // Update state with the filtered items array
    
  };

 
  const handleSubmit = (e) => {
    e.preventDefault()   // Prevents the default behavior of form submission, which would cause a page reload
    if(!newItem) return;
    console.log(newItem)
    addItem(newItem)
   setNewItem('')
  }


  return (
    <div className='App'>
      <Header title="TO DO LIST"/>
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItem 
        search = {search}
        setSearch = {setSearch}
      />
     {/* <Content/> */}
     <ListAndKeys
        items = {items.filter(item => ((item.task).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
     />
     <Footer
      Lenght = {items.length}
     />
   
    </div>
  )
}

export default App
