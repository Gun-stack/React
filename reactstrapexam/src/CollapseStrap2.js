import { useState } from 'react';
import { Button, Card, CardBody, Collapse } from 'reactstrap'
function CollapseStrap2(){
    const[open,setOpen]= useState(false);
    const[status,setStatus] =useState("closed");
    const[idx,setIdx]=useState(0);
    const content =[
        " 앞서 전씨는 한 여성지와의 인터뷰를 통해 자신을 미국에서 태어난 뉴욕에서 승마를 전공하고 글로벌 IT 기업 임원으로서 현재는 국내에서 아이들을 대상으로 예체능 심리학 예절교육원을 운영하고 있다고 밝혔습니다."   ,
        "거짓말을 친 거죠. 저희 엄마한테 집을 저희 어머님이 집을 사주려고 하는 게 한남동에 거의 60억 70억 돈 해요",
        "그래서 저는 집을 못 얻었어요. 계약금 다 날리고 50억 60억짜리 집의 계약금이 100만 원 200만 원도 아니고 천만 원 2천만 원 훨씬 훌쩍 넘는 돈을 계약금으로 걸어놓은 상태였었고 그래서"
    ]
    const entering= ()=>{
        setStatus("onEntering");
        if(idx===content.length-1)setIdx(0);
        else setIdx(idx+1)
    }

    
    const entered= ()=>{
        setStatus("onEntered");
    }
    
    const exiting= ()=>{
        setStatus("onExiting");
    }
    
    const exited= ()=>{
        setStatus("onExited");
    }
    return(
        <div>
            <Button color='success' onClick={()=>setOpen(!open)} style={{margin:'10px'}}>Toggle</Button>
            <h5>Current State : {status}</h5>
            <Collapse isOpen={open} horizontal
            onEntering={entering}
            onEntered={entered}
            onExiting={exiting}
            onExited={exited}
            >
                        {idx+1}
                <Card>  
                    <CardBody>
                        {content[idx]}
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    )

}

export default CollapseStrap2;