import { Button,ButtonGroup } from 'reactstrap';
import DropDownStrap from './DropDownStrap';
import { useState } from 'react';

function ButtonGroupStrap(){
    const[number,setNumber] = useState(0);
    return(
        <>
        <ButtonGroup color='success'>
            <Button>&lt;</Button>
            <Button>left</Button>
            <Button>right</Button>
            <Button>up</Button>
            <Button>&gt;</Button>
        </ButtonGroup>

        <ButtonGroup>
            <Button onClick={()=>setNumber(number-1)}>-</Button>        
            <Button disabled>{number}</Button>        
            <Button onClick={()=>setNumber(number+1)}>+</Button>       
            <DropDownStrap/>

        </ButtonGroup>
        
        </>
    )

}
export default ButtonGroupStrap;