import { useState } from 'react';
import React from 'react'

const Content = () => {
  const [name, setName] = useState('John') // default state willbe John

    const handleNameChange = () => {
        const names = ['John', 'Jane', 'Dave'];
        const int = Math.floor(Math.random() * 3)    
        // return names[int]
        setName(names[int])
      }

      const handleClick = () => {
        console.log("You clcked");
      }
      const handleClick2 = (name) => {
        console.log(`${name} was clicked`);
      }
      const handleClick3 = (e) => {
        console.log(e.target.innerText);
      }

  return (
    <main>
        
        <p onDoubleClick={handleClick}>Hello 
        {/* {handleNameChange()}</p> */}
        {name}</p>
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={() => handleClick2('Dave')}>Click it</button>
        <button onClick={(e) => handleClick3(e)}>Click it</button>
      
    </main>
  )
}

export default Content