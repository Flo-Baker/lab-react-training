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

function IdCard({image, lastName, firstName, gender, height, birth}){
        return(
        <div style={IdStyle}>
            <img style={imgStyle} src={image} alt='idCard-img'/>
            <div>
            <p><b>Last Name:</b> {lastName}</p>
            <p><b>First Name:</b> {firstName}</p> 
            <p><b>Gender:</b> {gender}</p>   
            <p><b>Height:</b> {height}</p>
            <p><b>Birth:</b> {birth}</p>
            </div>
        </div>
    );
}

export default IdCard;