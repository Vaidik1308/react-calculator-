
import './App.css';
import Screen from './Screen';
import BtnContainer from './BtnContainer';
import { useState } from 'react';
 
function App() {

  const [previousNumber,setPreviousNumber] = useState('0');
  const [op,setOp] = useState('');
  const [evaluate,setEvaluate] = useState('0');
  const [isEqual,setIsEqual] = useState(true)

  const final = (expression) => {
    setIsEqual(false)
    const ans = eval(expression);
    console.log(ans);
    setEvaluate(ans);
    setPreviousNumber(ans)
  
}
const sign = (value) => {
    // console.log('clicked');
    const newNumber = previousNumber+value;
    setPreviousNumber(newNumber);
    setIsEqual(true)

}
const displayNum = (value) => {
    setIsEqual(true);
    const newNumber = previousNumber!=='0' ? previousNumber+value : value 
    setPreviousNumber(newNumber)
    setEvaluate(newNumber)
}

const remove = () => {
    const newNumber = previousNumber.substring(0,previousNumber.length - 1 );
    setPreviousNumber(newNumber)
    setEvaluate(newNumber)
  }
  const reset = () => {
    setPreviousNumber('0')
    setEvaluate('0')
  }



  return (
    <div className="App">
      <Screen
        setPreviousNumber={setPreviousNumber}
        previousNumber={previousNumber}
        op={op}
        setOp={setOp}
        evaluate={evaluate}
        setEvaluate={setEvaluate}
        isEqual={isEqual}
      />
      <BtnContainer
        setPreviousNumber={setPreviousNumber}
        previousNumber={previousNumber}
        op={op}
        setOp={setOp}
        sign={sign}
        remove={remove}
        displayNum={displayNum}
        reset={reset}
        final={final}

      />
    </div>
  );
}

export default App;
