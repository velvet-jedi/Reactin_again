// import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';


function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      read: false,
      item: 'Gravity'
    },
    {
      id: 2,
      read: false,
      item: 'Telescopes'
    },
    {
      id: 3,
      read: false,
      item: 'Electromagnetism'
    }
  ]);

  const handleCheck = (id) => {
    const newList = items.map((item) => item.id === id ? {
      ...item, read: !item.read // spread operator to create new object, but change the read property
    } : item); // else keep the item unchanged
    setItems(newList); // set the new list to state
    localStorage.setItem('readingList', JSON.stringify(newList));
  }

  const handleDelete = (id) =>{
    const newList = items.filter((item) => 
      item.id !== id
    )
    setItems(newList)
    localStorage.setItem('readingList', JSON.stringify(newList));
  }

  return (
    <div className="App">
              {/* prop */}
      <Header title="Books"></Header>    
      <Content 
        items={items} 
        // setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        >
      </Content>  
      <Footer></Footer>
    </div>
  );
}

export default App;
