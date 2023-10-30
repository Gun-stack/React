import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import{Routes,Route} from 'react-router-dom'
import Header from './component/Header';
import BoardList from'./component/BoardList'
import BoardDetail from './component/BoardDetail';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exect path='/boardlist' element={<BoardList/>}/>
        <Route exect path='/boarddetail' element={<BoardDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
