import React from 'react';
import './Calculator.css';
import NumPad from '../components/NumPad/NumPad';
import DisplayScreen from '../components/DisplayScreen/DisplayScreen';
import displayScreen from '../components/DisplayScreen/DisplayScreen';
class Calculator extends React.Component {

    state = {
        display : '0',
        waitingForOperand : true,
        pendingOperator :  '',
        result : 0
    }

    calculate = (rightOperand, pendingOperator) => {

        let newResult = this.state.result;

        switch (pendingOperator) {
            case  '+':
                newResult = newResult + rightOperand;
                break;
            case '-':
                newResult = newResult - rightOperand;
                break;
            case '*':
                newResult = newResult * rightOperand;
                break;
            case '/':
                if (rightOperand === 0) {
                    return false;
                }
                newResult = newResult / rightOperand;
                break;
            default:
                break;
        }
        this.setState({
            result : newResult,
            display : newResult.toString()
        })
        
        return true;
    }

    onNumButtonClick = (numberClicked) => {
        let newDisplay = this.state.display;
        
        if ((this.state.display === '0' && numberClicked === 0)) {
            return
        }

        if (this.state.waitingForOperand) {
            newDisplay = '';
            this.setState({waitingForOperand : false});
        }

        if (this.state.display !== '0') {
            newDisplay = newDisplay + numberClicked.toString();
        }
        else {
            newDisplay =  numberClicked.toString();
        }
        this.setState({display : newDisplay});
    }

    onOperatorButtonClick = (operator) => {

        const operand = parseInt(this.state.display);
        const pendingOperator = this.state.pendingOperator;
        this.setState({pendingOperator : operator});

        if (!this.state.waitingForOperand) {
            if (!this.calculate(operand, pendingOperator)) {
                return;
            }
        }
        else {
            this.setState({result : operand});
        }

        this.setState({
            pendingOperator : operator,
            waitingForOperand : true
        })

    }

    onEqualsButtonClick = () => {
        const operand = parseInt(this.state.display);

        if(!this.state.waitingForOperand) {
            if(!this.calculate(operand, this.state.pendingOperator)) {
                return;
            }
            this.setState({pendingOperator : 'Undefined'});
        }
        else {
            this.setState({display : operand.toString()});
        }

        this.setState({
            result : operand,
            waitingForOperand : true,
            display : ''
        })
    }

    onClearButtonClick = () => {
        this.setState({
            result : 0,
            display : '0',
            waitingForOperand : true,
            pendingOperator : ''
        })
    }

    componentDidUpdate() {
        console.log('display = ' + this.state.display);
        console.log('result = ' + this.state.result);
    }

    render() {

        return(
            <div className = 'calculator'>
                <DisplayScreen 
                    value = {this.state.display}
                    expression = {`${this.state.result!==0 ? this.state.result : ''}${this.state.pendingOperator}${this.state.waitingForOperand  ? '' : this.state.display}`}
                />
                <NumPad 
                    onNumButtonClick = {this.onNumButtonClick}
                    onOperatorButtonClick = {this.onOperatorButtonClick}
                    onEqualsButtonClick = {this.onEqualsButtonClick}
                    onClearButtonClick = {this.onClearButtonClick}
                /> 
            </div>
        );
    }
}

export default Calculator;