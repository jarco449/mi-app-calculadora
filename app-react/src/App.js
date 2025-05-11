import logo from './logo.svg';
import './App.css';
//import Component from './Component';//
import Calculadora from './Calculadora';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        "hola willy 12"
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
         <h1>Calculadora</h1>
      <Calculadora />
      </header>
    </div>
  );
}

export default App;
