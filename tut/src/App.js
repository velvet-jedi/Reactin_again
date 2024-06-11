// import './App.css';
import Header from "./Header";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import SearchItem from "./SearchItem";
import { useState, useEffect } from "react";

function App() {
  const API_URL = "http://localhost:3500/items";
  // const [items, setItems] = useState(JSON.parse(localStorage.getItem('readingList')) || []); // get items from local storage

  const [items, setItems] = useState([]); // initially set this items state to be an empty array

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

  // default
  const [newItem, setNewItem] = useState("");

  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   localStorage.setItem('readingList', JSON.stringify(items));
  // }, [items])   // real time change saved to local storage

  const [fetchError, setFetchError] = useState(null);

  const [isLoading, setIsLoading] = useState(true); // if the app loads for the fist time it by default is loading true

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL); // get the response
        if (!response.ok) throw Error("Did not recieve expected data");
        const listItems = await response.json(); // parse the response
        setItems(listItems); // set the state to what we recieved from the API
        setFetchError(null);
      } catch (error) {
        console.log(error.message);
        setFetchError(error.message);
      } finally {
        setIsLoading(false); // when the try block exits
      }
    };
    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000);
  }, []); // only happens at load time

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    const myNewItem = {
      id: id,
      read: false,
      item: item,
    };
    const newList = [...items, myNewItem]; // spread operator
    setItems(newList);
  };
  //  for new addition submission
  const handleSubmit = (e) => {
    e.preventDefault(); // stop the page reload on subbmit
    if (!newItem) return; // if the input is empty don't do anything and get out of this funciton

    addItem(newItem);
    setNewItem("");
  };

  const handleCheck = (id) => {
    const newList = items.map((item) =>
      item.id === id
        ? {
            ...item,
            read: !item.read, // spread operator to create new object, but change the read property
          }
        : item
    ); // else keep the item unchanged

    setItems(newList);
  };

  const handleDelete = (id) => {
    const newList = items.filter((item) => item.id !== id);
    setItems(newList);
  };

  return (
    <div className="App">
      {/* prop */}
      <Header title="Books"></Header>

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />

      <main>
        {isLoading && <p>Loading ...</p>}
        {fetchError && !isLoading(
          <p
            style={{
              color: "red",
              fontWeight: "bold",
            }}
          >{`Error: ${fetchError}`}</p>
        )}

        {!fetchError && (
          <Content
            //  if search empty no filteration
            // set evverything to lowercase so to match
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            // MIND that we are not setting or saving the state just searching, equating the items to this wont change the state of items, it's just a variable reassignment
            // setItems={setItems}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          ></Content>
        )}
      </main>
      <Footer length={items.length}></Footer>
    </div>
  );
}

export default App;
