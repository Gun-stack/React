import React, { useState } from 'react';
import Component2 from './Component2';
const Component1 =()=>{
    const [user,setUser] = useState("jesse Hall")
    return(
        <>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 user={user} setUser={setUser}/>
        </>
    )
}

export default Component1