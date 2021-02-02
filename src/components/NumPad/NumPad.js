import React, { useEffect } from 'react';
import Button from '../../UI/Button/Button';
import './NumPad.css';

const Pad = (props) => {

    const handleKeyDown = (keycode) => {        
        
        let keyCode = keycode.keyCode;
        //console.log('keycode = ' + keyCode);
        
        if(keyCode >= 48 && keyCode <=57) {
            props.onNumButtonClick(keyCode - 48);
        } 
        else if(keyCode >= 96 && keyCode <= 105) {
            props.onNumButtonClick(keyCode - 96);
        }
        else if (keyCode === 107 || (keyCode === 187 )) {
            props.onOperatorButtonClick('+')
        } 
        else if (keyCode === 109 || keyCode === 189) {
            props.onOperatorButtonClick('-')
        } 
        else if (keyCode === 106 || (keyCode === 56 )) {
            props.onOperatorButtonClick('*')
        } 
        else if (keyCode === 111 || keyCode === 191) {
            props.onOperatorButtonClick('/')
        } 
        else if (keyCode === 67) {
            props.onClearButtonClick();
        }
        else if (keyCode === 13) {
            props.onEqualsButtonClick();
        }
        // else if (keyCode === 13 || (keyCode === 187 && !shiftKey)) {
        //     onEqualButtonClick()
        // } 
    }

    useEffect(() => {
        document.body.addEventListener('keydown', handleKeyDown);
        return () => document.body.removeEventListener('keydown', handleKeyDown);
    });

    const scientific = props.scientific ?(<div className='scientific'>
        <Button label='-/+' clicked = {props.changeSign}/>
        <Button label='Square' clicked = {props.findSquare}/>
        <Button label='Square root' clicked = {props.findSquareRoot}/>
    </div>) : null;

    return (
        <div className={props.darkMode ? 'dark-mode-numpad' : 'light-mode-numpad'}>
             <div className='main'> 
                <Button label = '1' clicked = {() => props.onNumButtonClick(1)} />
                <Button label = '2' clicked = {() => props.onNumButtonClick(2)} />
                <Button label = '3' clicked = {() => props.onNumButtonClick(3)} />
                <Button label = '+' clicked = {() => props.onOperatorButtonClick('+')} />

                <Button label = '4' clicked = {() => props.onNumButtonClick(4)} />
                <Button label = '5' clicked = {() => props.onNumButtonClick(5)} />
                <Button label = '6' clicked = {() => props.onNumButtonClick(6)} />
                <Button label = '-' clicked = {() => props.onOperatorButtonClick('-')} />

                <Button label = '7' clicked = {() => props.onNumButtonClick(7)} />
                <Button label = '8' clicked = {() => props.onNumButtonClick(8)} />
                <Button label = '9' clicked = {() => props.onNumButtonClick(9)} />
                <Button label = '*' clicked = {() => props.onOperatorButtonClick('*')} />

                <Button label = 'C' clicked = {() => props.onClearButtonClick('C')} />
                <Button label = '0' clicked = {() => props.onNumButtonClick(0)} />
                <Button label = '=' clicked = {() => props.onEqualsButtonClick()} />
                <Button label = '/' clicked = {() => props.onOperatorButtonClick('/')} />
                
            </div>
            {scientific}
        </div>
       
        
    );
}

export default Pad;