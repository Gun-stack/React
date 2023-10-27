import './App.css';
import{Routes,Route} from 'react-router-dom'
import Header from './component/Header';
import Main from './component/Main';
import MakeAccount from './component/MakeAccount';
import AccountInfo from './component/AccountInfo';
import Deposit from './component/Deposit';
import Withdraw from './component/Withdraw';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App">
      <Header/>
      
      <Routes>
        <Route exect path='/' element={<Main/>}/>
        <Route exect path='/makeaccount' element={<MakeAccount/>}/>
        <Route exect path='/deposit' element={<Deposit/>}/>
        <Route exect path='/withdraw' element={<Withdraw/>}/>
        <Route exect path='/accountinfo' element={<AccountInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
