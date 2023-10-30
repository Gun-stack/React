import './App.css';
import {useReducer, useState} from 'react';
//reducer :  state 를 업데이트 하는 함수 parameter [state, action]
//dispatche : state 업데이틀 위한 요구  action 을 갖고 감
//action  :  무엇을 -> 무엇으로 요구의 내용

const action_type= {
  deposit  : 'deposit' ,
  withdraw : 'withdraw' 
  
};

const reducer = (state,action)=>{  // ex) action =>(type:'deposit',payload:'100000')
  switch(action.type){ 
    case action_type.deposit : return +state+ +action.payload; // 문자열을 숫자로 바꾸는것  : +
    case action_type.withdraw : return +state- action.payload;
    
    default: return+state;
  }
}

function App() {
  const [money,setMoney] = useState(0);
  const [balance,dispatche] = useReducer(reducer,0);
  return (
    <div className="App">
      <h2>useReducer 은행</h2>
      <p>잔액 : {balance}</p>
      <input type='number' value={money} onInput={(e)=>setMoney(e.target.value)} step="1000"/>
      <button onClick={()=>dispatche(({type:'deposit',payload:money}))}>입금</button>
      <button onClick={()=>dispatche(({type:'withdraw',payload:money}))}>출금</button>
    </div>
  );
}

export default App;
