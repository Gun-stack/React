import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <h1> 
         Hello react  
        </h1>
        <MyComponent data="PTEST"/>


        <p>html 적용하기</p>
      </header>
    </div>
  );
}

export default App;
