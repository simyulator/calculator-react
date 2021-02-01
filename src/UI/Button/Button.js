import React from 'react';
import './Button.css';

const button = (props) => {
    return(
        <input 
            className = "button" 
            type = "button" 
            value = {props.label} 
            onClick = {props.clicked} 
            onKeyPress = {props.keyPressed} 
            autoFocus
        />
    );
}

export default button;