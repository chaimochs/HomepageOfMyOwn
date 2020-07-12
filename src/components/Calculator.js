import React, {useState} from 'react'

const Calculator  = () => {
    
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
	operations = ['+', '-', '*', '/', '='],
	functions = ['c', '±', '.'];
		
	const [displayVal, setDisplayVal] =useState('0')
	const [calcVals, setCalcVals] = useState([])

	const _displayNum = (num) => {
		if(displayVal.length > 19) { 
			return;
		} else if(displayVal === "0" || displayVal === "Undefined! 😫") { 
 		
				setDisplayVal(num)
	
		} else if(displayVal.charAt(0) === "-" && displayVal.charAt(1) === "0") {
			
				setDisplayVal( `-${num}`)
	
		} 
		else {
			
				setDisplayVal( displayVal + num)
	
		}
	}
	const _clearVals = () => {
		
			setDisplayVal( "0")
			setCalcVals([])
		
	}
	const _insDecimal = () => {
		if (displayVal.length > 19) {
			return;
		} else if (displayVal.indexOf(".") === -1) {
		
				setDisplayVal( displayVal + ".")
		
		} else {
			return;
		}
	}
	const _swapSign = () => {
		const char = displayVal.charAt(0);
		if(char === "-") {
		
				setDisplayVal( displayVal.slice(1))
		
		} else {
		
				setDisplayVal( "-" + displayVal)
		
		}
	}
	const _addToCalc = (oper) => {
		const currentVal = parseFloat(displayVal),
				calc = {
					val: currentVal,
					sign: oper
				},
				vals = [...calcVals];
		vals.push(calc);
	
			setDisplayVal( "0")
			setCalcVals( vals)
	
	}
	const _calcResult = (oper) => {
		const valsToCalc = [...calcVals],
				currentVal = parseFloat(displayVal);
		let result = 0;
		
		valsToCalc.push({val: currentVal, sign: oper});
		for(let i = 0, x = valsToCalc.length; i < x; i++){
			if(i === 0) {
				result = valsToCalc[i].val;
			} else {
				
				switch(valsToCalc[i - 1].sign){
					case "+":
						result += valsToCalc[i].val;
						break;
					case "-":
						result -= valsToCalc[i].val;
						break;
					case "*":
						result *= valsToCalc[i].val;
						break;
					case "/":
						result /= valsToCalc[i].val;
						break;
					default:
						console.log("Something went wrong...");
				}
			}
		}
		if(isNaN(result) || result === Infinity) {
			result = "Undefined! 😫";
		} else {
			result = result.toString();
		}
			setDisplayVal( result)
			setCalcVals( [])
    }
    
	
    const Functions = props => {
        const _handleFunct = (funct) => {
            switch (funct){
                case "c":
                    props._clearVals();
                    break;
                case "±":
                    props._swapSign();
                    break;
                case ".":
                    props._insDecimal();
                    break;
                default:
                    console.log("Something went wrong...");
            }
        }
            return(
                <div className="calc-functions">
                    {props.functions.map((funct) => {
                        return <Button
                                    button={funct}
                                    _handleFunct={_handleFunct.bind(this)}
                                        />;
                    })}
                </div>
            );
    };

    const Numbers  = props => {
        const _handleNum = (num) => {
            const parsedNum = num.toString();
            props._displayNum(parsedNum);
        }
        return(
            <div className="calc-numbers">
                {props.numbers.map((number) => {
                    return <Button 
                                    button={number}
                                    _handleNum={_handleNum.bind(this)}
                                    />
                })}
            </div>
        );
    };

    const Display = props => {
            return(
                <div className="calc-display">
                    {props.displayVal}
                </div>
            );
    };

    const Button = props => {
        const _handleClick = (e) => {
            switch (props.button){
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    props._handleNum(props.button);
                    break;
                case "c":
                case "±":
                case ".":
                    props._handleFunct(props.button);
                    break;
                case "+":
                case "-":
                case "*":
                case "/":
                case "=":
                    props._handleOper(props.button);
                    break;
            }
        }
        return (
            <button name={props.button} onClick={_handleClick.bind(this)}>
                {props.button}
            </button>
        );
    };

    const Operations = props => {
        const _handleOper = (oper) => {
            switch (oper){
                case "+":
                case "-":
                case "*":
                case "/":
                    props._addToCalc(oper);
                    break;
                case "=":
                    props._calcResult(oper);
                    break;
                default:
                    console.log("Something went wrong...");
        }   
    }
        return(
            <div className="calc-operations">
                {props.operations.map((operation, i) => {
                    return <Button key={i}
                                button={operation}
                                _handleOper={_handleOper.bind(this)}
                            />;
                })}
            </div>
        );
    };
    return(
        <div className="calculator">
            <Display
                displayVal={displayVal}
            />
            <Functions 
                functions={functions}
                _clearVals={_clearVals.bind(this)}
                _insDecimal={_insDecimal.bind(this)}
                _swapSign={_swapSign.bind(this)}
            />
            <Numbers 
                numbers={numbers}
                _displayNum={_displayNum.bind(this)}
            />
            <Operations
                operations={operations}
                _addToCalc={_addToCalc.bind(this)}
                _calcResult={_calcResult.bind(this)}
            />
        </div>
    );
}

export default Calculator