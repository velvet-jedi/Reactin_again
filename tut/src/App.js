// import './App.css';
import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import SearchItem from './SearchItem';
import { useState, useEffect } from 'react';


function App() {
  const [items, setItems] = useState([]); // get items from local storage
  
  //   [
  //     {
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
  // ]

;

  // default 
  const [newItem, setNewItem] = useState('');

  const [search, setSearch] = useState(''); 

  
  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('readingList')))
  }, [])  // set the items state on load time.

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('readingList', JSON.stringify(newItems));
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    const myNewItem = {
      id: id,
      read: false,
      item: item
    }
    const newList = [...items, myNewItem]; // spread operator
    setAndSaveItems(newList);

  }
  //  for new addition submission
  const handleSubmit = (e) => {
    e.preventDefault(); // stop the page reload on subbmit
    if (!newItem) return; // if the input is empty don't do anything and get out of this funciton
    
    addItem(newItem);
    setNewItem('');
  }

  const handleCheck = (id) => {
    const newList = items.map((item) => item.id === id ? {
      ...item, read: !item.read // spread operator to create new object, but change the read property
    } : item); // else keep the item unchanged

    setAndSaveItems(newList);
  }

  const handleDelete = (id) =>{
    const newList = items.filter((item) => 
      item.id !== id
    )
    setAndSaveItems(newList);
  }

  return (
    <div className="App">
              {/* prop */}
      <Header title="Books"></Header>
      
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content 
      //  if search empty no filteration
      // set evverything to lowercase so to match
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} 
        // MIND that we are not setting or saving the state just searching, equating the items to this wont change the state of items, it's just a variable reassignment
        // setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        >
      </Content>  
      <Footer length={items.length}></Footer>
    </div>
  );
}

export default App;
