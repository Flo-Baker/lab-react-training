import React from 'react';

const GreetingStyle = {
    textAlign: 'left',
    border: 'solid 2px black',
    margin: '10px',
    paddingLeft: '5px',
}

function Greetings(props) {
   console.log(props);
  return <div style={GreetingStyle}>
      <p> Hallo {props.langDe} </p>
     <p> Hola {props.langEs} </p>
  </div>;
}

export default Greetings;
