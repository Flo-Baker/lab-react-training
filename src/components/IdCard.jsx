import React from "react";

const IdStyle = {
    margin: '10px',
    padding: '2px 30px 2px 2px',
    border: 'solid 1px black', 
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'left',
    fontWeight: 'bold'
}

const imgStyle = {
    width: '150px',
    

}

function IdCard(props){
        return(
        <div style={IdStyle}>
            Last Name: {props.lastName}
            <p>First Name: {props.firstName}</p>
            <p>Gender: {props.gender}</p>   
            <p>Height: {props.height}</p>
            <p>Birth: {props.birth}</p>
            <img style={imgStyle} src={props.image} alt='idCard-img'/>
        </div>
    );
}

export default IdCard;