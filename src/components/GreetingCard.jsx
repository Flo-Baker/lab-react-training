import React from 'react';

/*
Create a Greetings component with 2 props:

lang: A string that could be ,"de" (=Hallo),"en","es","fr" (props) 
children: A text (props.children)

            <p><b>Hallo</b> {de}</p>
<IdCard lastName={'Musterfrau'}/>

const de ="Hallo"?

const lang = [{de:"Hallo"}, {fr:"Bonjour"}]

props.lang 

Example

<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>

What are the names? ?? 
 */

// const de = "Hallo"
// const fr = "Bonjour"

function GreetingCard({lang, text}) {
// if (lang === de) {
//     text = "Hallo";
// } 
// if (lang === fr)

// }
    return (
    <div>
        <p>{lang} {text}</p>
    </div>
)
}

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

// const lang="de" 











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