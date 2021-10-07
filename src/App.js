import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';


function App() {
  return (
    <div className="App">
    <h2>Iteration #1 - IdCard</h2>
    <IdCard
    lastName={'Mustermann'}
    firstName={'Max'}
    gender={'male'}
    height={180}
    birth={"1990-01-01"}
    image={'https://static.wikia.nocookie.net/wackishlyawesomerandomness/images/0/08/Imagemkksje.jpg'}
    />
    <hr />
    <h2>Iteration #2 - Greetings</h2>
    <Greetings 
    langDe={"Ludwig"}
    langEs={"Juan"}
    />
    <hr />
    </div>
  );
}

export default App;