import React, { useEffect, useState } from 'react';
import {Button,Popover,PopoverBody,PopoverHeader,Progress} from 'reactstrap';

function PopOverStrap(){
    const [open,setOpen] =useState(false);
    const [value,setValue] = useState(0);
    useEffect(()=>{
        if(value<100)
            setValue(value+0.001);
    },[value])




    return(
        <div>
             <Button id="Popover1"  onClick={()=>setOpen(!open)}>팝잇업</Button>
                <Popover flip placement='bottom' target="Popover1" isOpen={open} toggle={()=>setOpen(!open)} >
                    <PopoverHeader> 베트남서 韓 패키지 관광객 사망</PopoverHeader>
                    <PopoverBody>
                    패키지여행 상품을 이용해 베트남으로 떠난 한국인 관광객 4명이 급류에 휩쓸려 숨진 가운데, 패키지 상품을 판매한 여행사 측이 사고 수습에 나섰다.
                    </PopoverBody>
                </Popover>
                <br></br><br></br>
                <Progress className="my-1"value={value}/>
                
        </div>
    )


}
export default PopOverStrap;