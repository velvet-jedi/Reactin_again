import './App.css';

function App() {

  const handleNameChange = () => {
    const names = ['John', 'Jane', 'Dave'];
    const int = Math.floor(Math.random() * 3)    
    return names[int]
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello {handleNameChange()}</p>
      </header>
      
    </div>
  );
}

export default App;
