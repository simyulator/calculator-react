import React from 'react';
import './DisplayScreen.css';

const displayScreen = (props) => {
    return (
        <div>
            <input className = 'input-expression' type = 'text' value = {props.expression} disabled/>
            <input className = 'input-result' type = 'text' value = {props.value} disabled/>
        </div>
    );
}

export default displayScreen;