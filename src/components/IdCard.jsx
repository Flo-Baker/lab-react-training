import React from "react";

const IdStyle = {
    margin: '10px',
    width: '350px',
    padding: '5px 0 5px 5px',
    border: 'solid 2px', 
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'left',
    display: 'flex',
}

const imgStyle = {
    width: '150px',
    paddingRight: '10px',    
}

// QUESTION: HOW TO GET CONTENT BOLD EXCEPT THE PROPS (BEST PRACTICE)
// BEST PRACTICE TO PUT THE CONTENT INTO <ul>?

function IdCard(props){
        return(
        <div style={IdStyle}>
            <img style={imgStyle} src={props.image} alt='idCard-img'/>
            <div>
            <p>Last Name: {props.lastName}</p>
            <p>First Name: {props.firstName}</p> 
            <p>Gender: {props.gender}</p>   
            <p>Height: {props.height}</p>
            <p>Birth: {props.birth}</p>
            </div>
        </div>
    );
}

export default IdCard;