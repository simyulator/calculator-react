import React from 'react';
import Button from '../UI/Button';
import './Calculator.css';
import NumPad from '../components/NumPad/NumPad';

class Calculator extends React.Component {

    state = {
        calculatorScreen : '',
        waitingForOperand : false,
        pendingOperator :  false
    }

    onNumButtonClick = () => {

    }

    onOperatorButtonClicked = () => {

    }

    onEqualsButtonClicked = () => {

    }

    onClearButtonClicked = () => {

    }


    render() {
        let temp = this.state.calculatorScreen;

        if(temp[temp.length-1] === '/') {
            temp = temp.substring(0, temp.length-1);
            this.setState({calculatorScreen : temp});
        }

        return(
            <div className = 'calculator'>
                <input className = 'calculator-screen' type = 'text' value = {this.state.calculatorScreen} disabled></input>
                <div className = 'main'>
                    <NumPad 
                        onNumButtonClick = {this.onNumButtonClick}
                    />
                    <Button label = '1' clicked = {(event)=>this.onClickHandler(event)} keyPressed = {this.keyPressedHandler}/>
                    <Button label = '2' clicked = {(event)=>this.onClickHandler(event)} keyPressed = {this.keyPressedHandler}/>
                    <Button label = '3' clicked = {(event)=>this.onClickHandler(event)} keyPressed = {this.keyPressedHandler}/>
                    <Button label = '+' clicked = {(event)=>this.onClickHandler(event)} keyPressed = {this.keyPressedHandler}/>

                    <Button label = '4' clicked = {(event)=>this.onClickHandler(event)} keyPressed = {this.keyPressedHandler}/>
                    <Button label = '5' clicked = {(event)=>this.onClickHandler(event)} keyPressed = {this.keyPressedHandler}/>
                    <Button label = '6' clicked = {(event)=>this.onClickHandler(event)} keyPressed = {this.keyPressedHandler}/>
                    <Button label = '-' clicked = {(event)=>this.onClickHandler(event)} keyPressed = {this.keyPressedHandler}/>

                    <Button label = '7' clicked = {(event)=>this.onClickHandler(event)} keyPressed = {this.keyPressedHandler}/>
                    <Button label = '8' clicked = {(event)=>this.onClickHandler(event)} keyPressed = {this.keyPressedHandler}/>
                    <Button label = '9' clicked = {(event)=>this.onClickHandler(event)} keyPressed = {this.keyPressedHandler}/>
                    <Button label = '*' clicked = {(event)=>this.onClickHandler(event)} keyPressed = {this.keyPressedHandler}/>

                    <Button label = 'C' clicked = {(event)=>this.onClickHandler(event)} keyPressed = {this.keyPressedHandler}/>
                    <Button label = '0' clicked = {(event)=>this.onClickHandler(event)} keyPressed = {this.keyPressedHandler}/>
                    <Button label = '=' clicked = {(event)=>this.onClickHandler(event)} keyPressed = {this.keyPressedHandler}/>
                    <Button label = '/' clicked = {(event)=>this.onClickHandler(event)} keyPressed = {this.keyPressedHandler}/>
                </div>
            </div>
            
        );
    }

}

export default Calculator;