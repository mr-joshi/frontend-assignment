import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const  [apiData,setApiData]=useState([]);
  const [isLoading ,setIsloading]
  const apiCall=()=>{
   fetch("https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json").then(res=>
      res.json()
    ).then(apiData=>setApiData(apiData))
  }
  useEffect(() => {
    apiCall();
  },[])
  console.log(apiData)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
