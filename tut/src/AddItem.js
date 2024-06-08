// form component to add new items to list

import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {

  const inputRef = useRef();
  
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add a new book</label>
        <input 
            type="text" 
            id='addItem'
            autoFocus
            ref={inputRef} // apply the ref to the input
            placeholder='Add item'
            required    /**dont let ths user submit the form without this input basically dont let the user add a new item withput fillin ghte input */
            value={newItem} // set the value of the input to the state (our one source of truth)
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button 
            type='submit'
            aria-label='Add Item'
            onClick={() => inputRef.current.focus()}
        >
            <FaPlus />
        </button> 
    </form>
  )
}

export default AddItem