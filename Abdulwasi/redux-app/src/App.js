
import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index';
import { multNumber, divNumber } from './actions/index';

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const myOtherState = useSelector((state) => state.multTheNumber);
  const dispatch = useDispatch();
  return (
   <>
    <div className="container">
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>

      <div className="quantity">
        <a className="quantity_minus" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></a>
        <input name="quantity" type="text" className="quantity__input" value={myState}/>
        <a className="quantity_plus" title="Increment" onClick={() => dispatch(incNumber()) }><span>+</span></a>
      </div>
    </div>


    <div className="container my-5">
      <h1>Multiplication/Division counter</h1>
      <h4>using React and Redux</h4>

      <div className="quantity">
        <a className="quantity_minus" title="Division" onClick={() => dispatch(divNumber())}><span>/</span></a>
        <input name="quantity" type="text" className="quantity__input" value={myOtherState}/>
        <a className="quantity_plus" title="Multiplication" onClick={() => dispatch(multNumber()) }><span>*</span></a>
      </div>
    </div>
   </>
  )
}

export default App

