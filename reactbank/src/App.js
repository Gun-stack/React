import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Routes,Route} from'react-router-dom'
import MakeAccount from './component/MakeAccount';
import AccountInfo from './component/AccountInfo';
import Deposit from './component/Deposit';
import Withdraw from './component/Withdraw';
import AllAccountInfo from './component/AllAccountInfo';
import BankHeader from './BankHeader';
function App() {
  return (
    <div className="App" >
      <BankHeader/>
      <Routes>
        <Route exact path="/MakeAccount" element={<MakeAccount/>}></Route>
        <Route exact path="/AccountInfo" element={<AccountInfo/>}></Route>
        <Route exact path="/Deposit" element={<Deposit/>}></Route>
        <Route exact path="/Withdraw" element={<Withdraw/>}></Route>
        <Route exact path="/AllAccountInfo" element={<AllAccountInfo/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
