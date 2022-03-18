import React from 'react';
class Calc extends React.Component {
  constructor(props){
    super(props);

  }

render(){
let ans=0;

return(
  <div id="CalcBody" className='container'>
    <div id="row ">
      <input class="form-control form-control-lg" type="text" /><br />
    </div>
    <div id='Input'>
      <div className='row'>
      <button id='seven' className='btn col-md-4'>7</button>
      <button id='eight' className='btn col-md-4'>8</button>
      <button id='nine' className='btn col-md-4'>9</button><br />
      </div>
      <div className='row'>
      <button id='four' className='btn col-md-4'>4</button>
      <button id='five' className='btn col-md-4'>5</button>
      <button id='six' className='btn col-md-4'>6</button><br />
      </div>
      <div className='row'>
      <button id='one' className='btn col-md-4'>1</button>
      <button id='two' className='btn col-md-4'>2</button>
      <button id='three' className='btn col-md-4'>3</button>
      </div>
      <div className='row'>
        <button id='nagate' className='btn col-md-4'>+/-</button>
        <button id='zero' className='btn col-md-4'>0</button>
        <button id='decimal' className='btn col-md-4'>.</button>
      </div>
      
    </div>
    <div id='CalcFun' className='row'>
      <button id='add' className='btn col-md-3 btn-secondary'>+</button>
      <button id='subtract' className='btn col-md-3 btn-secondary'>-</button>
      <button id='multiply' className='btn col-md-3 btn-secondary'>x</button>
      <button id='divide' className='btn col-md-3 btn-secondary'>/</button>
    </div>
    <button id='equals' className='btn btn-primary col-md-12'>=</button>
    
  </div>
)

}

}

export default Calc;
