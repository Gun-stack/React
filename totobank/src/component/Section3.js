import {Button,Badge} from 'reactstrap';
const Section3=()=>{
    return(
        <div style={{width:"100%"}}>
            <div className='section_left' >
                <div className='imgBox attachRight'>
                <img src='/main-moim.png' width='480px' height='680px' alt=""/>
                </div>
            </div>  
            <div className='section_right'>
                <div className="textBox attachLeft" style={{paddingTop:"22%"}}>
                    <span className='L-text'>
                        함께쓰고 같이보는<br/>
                        <Badge color='warning'  style={{color:"white"}}>B</Badge>&nbsp;모임통장
                    </span>
                    <span className='S-text'>
                        토토톡 친구들 바로 모임통장으로 초대하고<br/>   
                        친구들과 함꼐 잔액과 입출금 현황을 확인할 수 있습니다<br/>
                        재미있는 메시지 카드로 회비 입금 요청도 해보세요
                    </span><br/>
                    <Button color='light' size='sm'>모임통장 &gt;</Button>
                </div>
            </div>
        </div>
    )
}
export default Section3