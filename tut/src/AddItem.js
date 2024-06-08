// form component to add new items to list
import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = () => {
  return (
    <form className='addForm'>
        <label htmlFor="addItem">Add a new book</label>
        <input 
            type="text" 
            id='addItem'
            autoFocus
            placeholder='Add item'
            required    /**dont let ths user submit the form without this input basically dont let the user add a new item withput fillin ghte input */
        />
        <button 
            type='submit'
            aria-label='Add Item'
        >
            <FaPlus />
        </button> 
    </form>
  )
}

export default AddItem