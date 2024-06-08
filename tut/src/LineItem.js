//  reusable component for every line item
import React from 'react'
//  innport the icoon for line items

import {FaTrashAlt} from 'react-icons/fa' 



const LineItem = ( { item, handleCheck, handleDelete } ) => {
  return (
    <li key={item.id} className='item' style= { { listStyle: 'none' } }>
              <input 
                type="checkbox"
                onChange={() => handleCheck(item.id)} // kust like the key
                checked={item.read} 
                />
                <label
                style={(item.read) ? {textDecoration: 'line-through'} : null}
                >{item.item}</label>
                <FaTrashAlt onClick={() => handleDelete(item.id)} role='button' tabIndex='0' aria-label={`Delete ${item.item}`}/>
                
            </li>
  )
}

export default LineItem