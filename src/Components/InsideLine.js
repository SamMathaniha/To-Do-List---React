import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const InsideLine = (item, handleCheck, handleDelete) => {
  return (
    <li className='i' key={item.id}>
              {/* Checkbox input to toggle the checked status of the item */}
              <input
                type='checkbox'
                onChange={() => handleCheck(item.id)}  // Call handleCheck function when checkbox is toggled
                checked={item.checked}  // Set checkbox checked status based on item.checked property
              />
              {/* Label to display the task and apply a line-through style if item is checked */}
              <label
                style={(item.checked) ? { textDecoration: 'line-through' } : null}  // Apply line-through style if item is checked
                onDoubleClick={() => handleCheck(item.id)}  // Call handleCheck function when label is double-clicked
              >
                {item.task}  {/* Display the task */}
              </label>
              {/* Trash icon to delete the item */}
              <FaTrashAlt
                role='button'
                tabIndex='0'
                onClick={() => handleDelete(item.id)}  // Call handleDelete function when trash icon is clicked
                aria-label={`Delete ${item.item}`}
              />
            </li>
  )
}

export default InsideLine