import { useState } from 'react';
function MyInfo(){
    const [name,setName]= useState('이름');
    const [age,setAge]= useState('나이');
    const [address,setAdress]= useState('주소');
    return(
        <>
            이름 : <input type='text' onChange={(e)=>setName(e.target.value)} /><br/>
            나이 : <input type='text' onChangeCapture={(e)=>setAge(e.target.value)}/><br/>
            주소 : <input type='text' onChangeCapture={(e)=>setAdress(e.target.value)}/><br/>
            {name},{age},{address}
        </>
    )
}

export default MyInfo;