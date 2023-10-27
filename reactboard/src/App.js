import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import{Routes,Route} from 'react-router-dom'
import Header from './component/Header';
import BoardList from './BoardList';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exect path='/boardlist' element={<BoardList/>}/>
      </Routes>
    </div>
  );
}

export default App;
