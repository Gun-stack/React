import './App.css';
import {useReducer} from 'react';
import {initState,reducer} from './MyReducer';
import MyNickname from './MyNickname';


function App() {
  const [info,dispatch]= useReducer(reducer,initState);
  return (
    <div className="App">

      <label >{info.id}</label><br></br>
      <input type='text' onInput={(e)=> dispatch({type:'IC', payload :e.target.value})}/>
      <br></br>

      <MyNickname info={info} dispatch={dispatch}/>

      <label>{info.subject}</label><br></br>
      <input type='text' onInput={(e)=> dispatch({type:'SC', payload :e.target.value})}/>
      <br></br>
      

      <label>{info.grade}</label><br></br>
      <input type='text' onInput={(e)=> dispatch({type:'GC', payload :e.target.value})}/>
      <br></br>
      
    </div>
  );
}

export default App;
