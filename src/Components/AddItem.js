import React from 'react'
import './AddItem.css'
import { useRef } from 'react'

import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {

  const inputRef = useRef()

  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'> Add Item</label>
        <input
            autoFocus
            id='addItem'
            ref={inputRef}
            type='text'
            placeholder='Add item'
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button 
            type="submit"
            aria-label = "Add Items"
            onClick={() => inputRef.current.focus()}
            >
            
                <FaPlus />
            </button>
            
    </form>
  )
}

export default AddItem