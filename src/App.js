import './App.css';
import Navbar from "./components/Navbar"



function App() {
  const name = "Doe"
  return (
    <div className="App">
      <Navbar/>
      <h1>My name is {name}</h1>
      <h2>Hello world</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quia!</p>
    </div>
    
  );
}

export default App;
