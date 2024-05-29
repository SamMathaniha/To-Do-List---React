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
import apiRequest from './Components/apiRequest';


function App() {

  const API_URL = 'http://localhost:3500/items'
  // Set up state using useState hook to manage the list of items
  const [items, setItems] = useState( []
  );

  const [newItem, setNewItem] = useState('')
  const[search,setSearch] = useState('')
  const[fetchError, setFetchError] = useState(null)
  const[isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if(!response.ok) throw Error("Data not received")
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null)
      } catch (err) {
        setFetchError(err.message);
      }finally
      {
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())()
    }, 2000)
  
    
  }, []);
  

  const addItem = async(task) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = {id, checked:false, task}
    const listItems = [...items, addNewItem]
    setItems(listItems); 
   
    const postOptions = {
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(addNewItem)
    }
  

  const result = apiRequest(API_URL, postOptions)
  if(result) setFetchError(result)

  }
  // Function to handle toggling the checked status of an item
  const handleCheck = async(id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);  // Update state with the modified items array
    
    const myItem =listItems.filter((item) => item.id===id)

    const updateOptions = {
      method: 'PATCH',
      header: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({checked:myItem[0].checked})
    }
  
    const reqUrl = `${API_URL}/${id}`
  const result = apiRequest(reqUrl, updateOptions)
  if(result) setFetchError(result)

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
     <main>
      {isLoading && <p className='DataErrorShow'>Loading items ......</p>}
      {fetchError && <p className='DataErrorShow'>{`Error: ${fetchError}`}</p>}
    {!isLoading && !fetchError && <ListAndKeys
        items = {items.filter(item => ((item.task).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
     />}
     </main>
     <Footer
      Lenght = {items.length}
     />
   
    </div>
  )
}

export default App
