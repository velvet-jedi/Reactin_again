// import { useState } from 'react';
import React from 'react'
// import {FaTrashAlt} from 'react-icons/fa'
import ItemList from './ItemList';


const Content = ({ items, handleCheck, handleDelete }) => {
  // const [name, setName] = useState('John') // default state willbe John

    // const handleNameChange = () => {
    //     const names = ['John', 'Jane', 'Dave'];
    //     const int = Math.floor(Math.random() * 3)    
    //     // return names[int]
    //     setName(names[int])
    //   }

    //   const handleClick = () => {
    //     console.log("You clcked");
    //   }
    //   const handleClick2 = (name) => {
    //     console.log(`${name} was clicked`);
    //   }
      // const handleClick3 = (e) => {
      //   console.log(e.target.innerText);
      // }

      // const [items, setItems] = useState([
      //   {
      //     id: 1,
      //     read: false,
      //     item: 'Gravity'
      //   },
      //   {
      //     id: 2,
      //     read: false,
      //     item: 'Telescopes'
      //   },
      //   {
      //     id: 3,
      //     read: false,
      //     item: 'Electromagnetism'
      //   }
      // ]);

      // const handleCheck = (id) => {
      //   const newList = items.map((item) => item.id === id ? {
      //     ...item, read: !item.read // spread operator to create new object, but change the read property
      //   } : item); // else keep the item unchanged
      //   setItems(newList); // set the new list to state
      //   localStorage.setItem('readingList', JSON.stringify(newList));
      // }

      // const handleDelete = (id) =>{
      //   const newList = items.filter((item) => 
      //     item.id !== id
      //   )
      //   setItems(newList)
      //   localStorage.setItem('readingList', JSON.stringify(newList));
      // }

  return (
    <>
      
        
        {/* <p onDoubleClick={handleClick}>Hello  */}
        {/* {handleNameChange()}</p> */}
        {/* {name}</p>
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={() => handleClick2('Dave')}>Click it</button>
        <button onClick={(e) => handleClick3(e)}>Click it</button> */}
      {items.length ? (
        <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
        // <ul>
        //   {items.map((item) => (
        //     <li key={item.id} className='item' style= { { listStyle: 'none' } }>
        //       <input 
        //         type="checkbox"
        //         onChange={() => handleCheck(item.id)} // kust like the key
        //         read={item.read} 
        //         />
        //         <label
        //         style={(item.read) ? {textDecoration: 'line-through'} : null}
        //         >{item.item}</label>
        //         <FaTrashAlt onClick={() => handleDelete(item.id)} role='button' tabIndex='0' />
                
        //     </li>
        //   ))}
        // </ul>
        
        ): (
          <p>No Books</p>
        )}
    </>
  )
}

export default Content