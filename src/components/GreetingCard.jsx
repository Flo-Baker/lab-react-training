import React from 'react';

// const GreetingStyle = {
//     textAlign: 'left',
//     border: 'solid 2px black',
//     margin: '10px',
//     paddingLeft: '5px',
//     width: '350px'
// }

// const borderStyle = {
//     border: 'solid 1px green',
//     padding: '2px',
//     width: '340px',
// }

// function GreetingCard(props) {
//     // JScode logic or ternary: if lang="de" -> print "hallo" // if lang ="fr" -> print "Bonjour"
//    console.log(props);
//   return <div style={GreetingStyle}>
//       <p style={borderStyle}> Hallo {props.langDe} </p>
//       <p style={borderStyle}> Hola {props.langEs} </p>
//       <p style={borderStyle}> Salut {props.langFr}</p>
//   </div>;
// }

function GreetingCard({lang, text}) {
return (
    <div>
        <p>{lang}</p>
        <p>{text}</p>
    </div>
)
}









// ternary: lang="de" ? "Hallo" : nu

/*
function GreetingCard(props) {
    const { lang, children } = props // makes it sense here!?

return <div>

</div>
}
*/

// function GreetingCard( { lang, children } ) {
//     if (lang === "de") {
//         return "Hallo" }
// return ( <div style={GreetingStyle}>
// <p> {lang === "de"} </p>
// <p>  {children} </p>
// </div>
//  )
// }


// if lang === "de" return "Hallo"
// if lang === fr return "Bonjour"

export default GreetingCard;