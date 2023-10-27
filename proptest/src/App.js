import './App.css';
import MyComponent from './MyComponent';
import PropsDataType from './PropsDataType';
import PropsBoolean from './PropsBoolean';
import PropsRequired from './PropsRequired';
import PropsNode from './PropsNode';

function App() {

  return (
    <div className="App">
      <MyComponent info ={{name:"ddd" ,age:"40" }} />

      <PropsDataType 
      String="react" 
      Number={501}
      Boolean={1==1}
      Array={[1,2,3]}
      ObjectJson={{react:'리액트',version:501}}
      Function = {console.log("FunctionProps:function!")}
      />

    <PropsBoolean BooleanTrueFalse={false}/>
    <PropsBoolean BooleanTrueFalse/>

    <PropsRequired  ReactVersion={5001}/>
    <br/>
    <PropsNode>
      <span>node from App.js</span>
    </PropsNode>




    </div>
  );
}

export default App;
