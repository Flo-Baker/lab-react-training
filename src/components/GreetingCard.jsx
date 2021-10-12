import React from 'react';
/*
Create a Greetings component with 2 props:

lang: A string that could be ,"de" (=Hallo),"en","es","fr" (props) 
children: A text (props.children)?

    const de ="Hallo"?

    const lang = [{de:"Hallo"}, {fr:"Bonjour"}]

    props.lang 

Example
<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>
*/

// creating the following JS-function and afterwards use it 
// in the function "GreetingCard"

const helloDecider = (lang) => {
    switch (lang) {
        case 'pt':
            return "Olá"
        case 'de':
            return "Hallo"
        case 'fr':
            return "Bonjour"
        default:
            break;
    }
}

const GreetingStyle = {
    textAlign: 'left',
    border: 'solid 2px black',
    margin: '10px',
    paddingLeft: '5px',
    width: '350px',
    transform: '45deg'
}

function GreetingCard({lang, children}) {
        return (
        <div style={GreetingStyle}>
            <h3> {helloDecider(lang)} {children} </h3>
        </div>
    )
}

export default GreetingCard;