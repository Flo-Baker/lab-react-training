import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import GreetingCard from './components/GreetingCard';
// import Random from './components/Random';


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
    <IdCard
    lastName={'Mustermann'}
    firstName={'Lisa'}
    gender={'female'}
    height={180}
    birth={"1990-02-02"}
    image={'https://randomuser.me/api/portraits/women/44.jpg'}
    />
    <hr />
    <h2>Iteration #2 - Greetings</h2>
    <GreetingCard lang="de" text="Hallo">Ludwig</GreetingCard>
    {/* <GreetingCard lang="fr">François</GreetingCard> */}
    {/* <GreetingCard 
    langDe={"Ludwig"}
    langEs={"Juan"}
    langFr={"François"}
    /> */}
    <hr />
    <h2>Iteration #3 - Random</h2>
    {/* <Random /> */}
    <hr />
    </div>
  );
}

export default App;