import { useState } from 'react';


function UserAdd({userList,setUserList}){
    const [user,setUser]= useState({name:'',age:'',address:'',tel:''});

    const change = (e)=>{
        let name=e.target.name;
        let value = e.target.value;
        setUser({...user,[name]:value});
    }
    const addUser =()=>{
        setUserList([...userList,user]); // 유저를 유저리스트에 넣음
        setUser({name:'',age:'',address:'',tel:''}); //비움
      }
    return (
        <div className="App"> 
            <table border="1">  
                이름 : <input type='text' name="name" value={user.name} onChange={change}/><br/> 
                나이 : <input type='text' name="age" value={user.age}onChange={change}/><br/>
                주소 : <input type='text' name="address" value={user.address} onChange={change}/><br/>
                전번 : <input type='text' name="tel" value={user.tel} onChange={change}/><br/>
                <button onClick={addUser}>추가</button><br/><br/>
            </table>
        </div>
        );  
    
}

export default UserAdd;