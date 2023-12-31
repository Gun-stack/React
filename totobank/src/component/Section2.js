import {Button} from 'reactstrap';
const Section2 =()=>{
    return(
        <div style={{width:"100%"}}>
            <div className='section_left' >
                <div className="textBox attachRight"style={{paddingTop:"20%"}}>
                    <span className='L-text'>
                        우대조건 없이<br/>
                        합리적인 예금과 적금
                    </span>
                    <span className='S-text'>
                        기대했던 금리와 다르게 복잡한 우대조건에 실망하신 적이 있었나요?<br/>
                        토토뱅크의 예금, 적금은 숨겨진 우대조건 없이 누구에게나<br/>
                        편리하고 합리적입니다
                    </span><br/>
                    <Button color='light' size='md'>정기예금&gt;</Button>&nbsp;&nbsp;&nbsp;
                    <Button color='light' size='md'>자유적금&gt;</Button><br/><br/><br/>
                    <img src='/main-savings-money.png' width='432px' height='100px' alt=""/>
                </div>
            </div> 
            <div className='section_right'>
                <div className='imgBox attachLeft'>
                    <img src='/main-savings.png' width='410px' height='720px' alt=""/>
                </div>
            </div>
        </div>
    )


}
export default Section2;