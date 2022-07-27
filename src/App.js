import {useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';
import {performOperation} from './Services'

function App() {
  const [result, setResult] = useState([])

  const inputArray = [1, 2, 3, 5, 6, 8, 9];

  useEffect(() => {
    const resultArray = performOperation(inputArray)
    console.log('resultArray', resultArray)
    setResult(resultArray)
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p data-testid={'resultField'}>
          {result.join(', ')}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
