import './App.css';
import { useState } from 'react';
function App() {
      const [user,setUser]= useState({name:'',age:'',address:'',tel:''});
      const change = (e)=>{
        let name=e.target.name;
        let value = e.target.value;
        setUser({...user,[name]:value});
      }
  return (
    <div className="App">
        <>
            이름 : <input type='text' name="name" onChange={change}/><br/>
            나이 : <input type='text' name="age" onChange={change}/><br/>
            주소 : <input type='text' name="address" onChange={change}/><br/>
            전화번호 : <input type='text' name="tel" onChange={change}/><br/>

        </>

          <table border="1"  >
            <tbody>
            <tr><th>이름</th><th>나이</th><th>주소</th><th>전화번호</th></tr>
            <tr><td>{user.name}</td><td>{user.age}</td><td>{user.address}</td><td>{user.tel}</td></tr>
{/* 키보드가 너무 탐이 나네요 탐스러운 키 보 드 */}
            </tbody>
          </table>
    </div>
  );

}
export default App;
