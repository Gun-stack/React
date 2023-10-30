import './App.css';
import { useDispatch,useSelector } from 'react-redux'
function App() {
  const dispatch = useDispatch();
  const {value} = useSelector(state=>state.value);
  const {count} = useSelector(state=>state.count);
  return (
    <div className="App">
      <div>
        value : {value}
      </div>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
      <button onClick={()=>dispatch({type:"RESET"})}>RESET</button>
      <div>
          count:{count}
          <button onClick={()=>dispatch({type :"PUSH"})}>up</button>
      </div>

    </div>
  );
}

export default App;
