import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'


const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
          {items.map((item) => (
            <li key={item.id} className='item' style= { { listStyle: 'none' } }>
              <input 
                type="checkbox"
                onChange={() => handleCheck(item.id)} // kust like the key
                read={item.read} 
                />
                <label
                style={(item.read) ? {textDecoration: 'line-through'} : null}
                >{item.item}</label>
                <FaTrashAlt onClick={() => handleDelete(item.id)} role='button' tabIndex='0' />
                
            </li>
          ))}
        </ul>
  )
}

export default ItemList