import { useState } from 'react'
function FStateComp(){
    const [StateString,setStateString] =useState('react');
    const [StateNumber,setStateNumber] =useState('501');
    return(
        <>
        <button onClick={()=>{setStateString('리액트')}}> 스트링 변경</button><br/>
        StateString : {StateString}<br/>
        <button onClick={()=>{setStateNumber('6060606')}}> 넘버 변경</button><br/>
        StateNumber : {StateNumber}
        </>
    )
}

export default FStateComp;