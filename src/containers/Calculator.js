import React from 'react';
import './Calculator.css';
import NumPad from '../components/NumPad/NumPad';
import DisplayScreen from '../components/DisplayScreen/DisplayScreen';
import Button from '../UI/Button/Button';
class Calculator extends React.Component {

    state = {
        display : '',
        waitingForOperand : true,
        pendingOperator :  '',
        result : 0,
        darkMode : false,
        scientificMode : false
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
        console.log('new result = ' + newResult);
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
        //this.setState({pendingOperator : operator});

        if (this.state.pendingOperator!== ''  && !this.state.waitingForOperand) {
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
            this.setState({pendingOperator : ''});
        }
        else {
            this.setState({display : operand.toString()});
        }

        this.setState({
            result : 0,
            waitingForOperand : true,
            
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
        console.log('result = ' + this.state.result);
        console.log('display = ' + this.state.display);
    }

    switchTheme = () => {
        let dark = this.state.darkMode;
        this.setState({darkMode : !dark});
    }

    toggleScientificMode = () => {
        let sci = this.state.scientificMode;
        this.setState({scientificMode : !sci});
    }

    changeSign = () => {
        let currentValue = ''+parseInt(this.state.display);

        if(currentValue > 0) {
            this.setState({display  :  '-' + currentValue});
        }
        else if(currentValue < 0) {
            currentValue = currentValue.replace('-','');
            this.setState({display : currentValue});
        }
    }

    findSquare = () => {
        let currentValue =  parseInt(this.state.display);
        let squaredValue = currentValue  * currentValue;
        this.setState({
            display : squaredValue,
            result : 0
        });
    }

    findSquareRoot = () => {
        let currentValue = parseInt(this.state.display);
        let sqrRoot = Math.sqrt(currentValue);
        this.setState({
            display : sqrRoot,
            result : 0
        })
    }



    render() {

        // let expression = this.state.result !== 0 ? `${this.state.result}${this.state.pendingOperator}${this.state.waitingForOperand ? '' : this.state.display}` : '';
        // expression = expression.replace('/','');
        // expression = parseInt(expression);
        // // console.log('result = ' + this.state.result + ' ' + 'pending operator = ' + this.state.pendingOperator + ' ' + 'waiting for operand = ' +  this.state.waitingForOperand);
        

        return(
            <div className = {this.state.darkMode ? 'calculator-dark-mode' : 'calculator-light-mode'}>
                <div className={this.state.darkMode ? 'extra-buttons-dark' : 'extra-buttons-light'}>
                    <Button clicked={this.switchTheme} label='Switch theme'/>
                    <Button clicked={this.toggleScientificMode} label='Scientific mode' />
                </div>
                
                <DisplayScreen 
                    value = {this.state.display}
                    expression = {this.state.result !== 0 ? `${this.state.result}${this.state.pendingOperator}${this.state.waitingForOperand  ? '' : this.state.display}` : ''}
                    // expression = {expression}
                    darkMode = {this.state.darkMode}
                />
                <NumPad 
                    onNumButtonClick = {this.onNumButtonClick}
                    onOperatorButtonClick = {this.onOperatorButtonClick}
                    onEqualsButtonClick = {this.onEqualsButtonClick}
                    onClearButtonClick = {this.onClearButtonClick}
                    darkMode = {this.state.darkMode}
                    scientific = {this.state.scientificMode}
                    changeSign = {this.changeSign}
                    findSquare = {this.findSquare}
                    findSquareRoot = {this.findSquareRoot}
                /> 
            </div>
        );
    }
}

export default Calculator;