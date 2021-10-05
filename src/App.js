import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';

function App() {
  return (
    <div className="App">
    <IdCard
    lastName={'Mustermann'}
    firstName={'Max'}
    gender={'male'}
    height={180}
    birth={'1990-01-01'}
    image={'https://randomuser.me/api/portraits/men/48.jpg'}
    />
    </div>
  );
}

export default App;
