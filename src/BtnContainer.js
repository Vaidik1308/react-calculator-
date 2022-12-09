
import Add from './Add';
import Clear from './Clear';
import Divide from './Divide';
import Equalsto from './Equalsto';
import Multiply from './Multiply';
import Percent from './Percent';
import Subtract from './Subtract';
import Remove from './Remove';
import Btn from './Btn';




const BtnContainer = (
    {setPreviousNumber,previousNumber,op,setOp,sign,remove,reset,final,displayNum}
    ) => {

    

    
    

  return (
    <div className='btnContainer'>
        <Clear 
            setPreviousNumber={setPreviousNumber}
            previousNumber={previousNumber} 
            reset={reset}
        />
        <Percent 
            setPreviousNumber={setPreviousNumber}
            previousNumber={previousNumber}
            sign={sign}
        />
        <Remove 
            setPreviousNumber={setPreviousNumber}
            previousNumber={previousNumber}
            remove={remove}
        />
        <Divide 
            setPreviousNumber={setPreviousNumber}
            previousNumber={previousNumber}
            value='/'
            sign={sign}
            op={op}
            setOp={setOp}
        />
        
        <Btn
            value='9'
            setPreviousNumber={setPreviousNumber}
            previousNumber={previousNumber}
            displayNum={displayNum}
        />
        <Btn
            value='8'
            setPreviousNumber={setPreviousNumber}
            previousNumber={previousNumber}
            displayNum={displayNum}
        />
        <Btn
            value='7'
            setPreviousNumber={setPreviousNumber}
            previousNumber={previousNumber}
            displayNum={displayNum}
        />
        <Multiply
            setPreviousNumber={setPreviousNumber}
            previousNumber={previousNumber}
            value='*'
            displayNum={displayNum}
            sign={sign}
        />
        
        <Btn
            value='4'
            setPreviousNumber={setPreviousNumber}
            previousNumber={previousNumber}
            displayNum={displayNum}
        />
        <Btn
            value='5'
            setPreviousNumber={setPreviousNumber}
            previousNumber={previousNumber}
            displayNum={displayNum}
        />
        <Btn
            value='6'
            setPreviousNumber={setPreviousNumber}
            previousNumber={previousNumber}
            displayNum={displayNum}
        />
        <Subtract
            setPreviousNumber={setPreviousNumber}
            previousNumber={previousNumber}
            value='-'
            displayNum={displayNum}
            sign={sign}
        />
        <Btn
            value='1'
            setPreviousNumber={setPreviousNumber}
            previousNumber={previousNumber}
            displayNum={displayNum}
        />
        <Btn
            value='2'
            setPreviousNumber={setPreviousNumber}
            previousNumber={previousNumber}
            displayNum={displayNum}
        />
        <Btn
            value='3'
            setPreviousNumber={setPreviousNumber}
            previousNumber={previousNumber}
            displayNum={displayNum}
        />
        <Add
            setPreviousNumber={setPreviousNumber}
            previousNumber={previousNumber}
            value='+'
            displayNum={displayNum}
            sign={sign}
        />
        <Btn
            setPreviousNumber={setPreviousNumber}
            previousNumber={previousNumber}
            value='00'
            displayNum={displayNum}
        />
        <Btn
            setPreviousNumber={setPreviousNumber}
            previousNumber={previousNumber}
            value="0"
            displayNum={displayNum}
        />        
        <Btn
            setPreviousNumber={setPreviousNumber}
            previousNumber={previousNumber}
            value="."
            displayNum={displayNum}
        />        
        <Equalsto
            setPreviousNumber={setPreviousNumber}
            previousNumber={previousNumber}
            final={final}

        />
    </div>
  )
}

export default BtnContainer