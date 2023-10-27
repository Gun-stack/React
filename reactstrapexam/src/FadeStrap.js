import { useState } from 'react'
import { Fade,Button } from 'reactstrap'

function FadeStrap(){
    const[fadeIn,setFadeIn]=useState(false);
    const fadestyle = {width : '600px',margin:'2px auto',border:'solid gray 1px'}
    return(
        <>
        <Button color='info' onClick={()=>setFadeIn(!fadeIn)}>Fade In/Out</Button>
        <Fade in={fadeIn} tag="p" style={fadestyle}>
        녹취 시점은 지난 2020년 1월로, 전씨는 "예절교육학원을 할 건데 사무실도 필요하고 해서 남자친구인 이모씨 이름으로 대출이 이뤄질 것"이라고 남자친구 지인에게 설명하고 있습니다. 그러면서 "내가 보증인으로 들어가면 대출이 꽤 나온다. 아는 은행장도 있고 20살 때부터 신용카드를 써서 신용 등급이 꽤 좋다. 내가 보증인을 서면 대출이 많이 나올 것"이라고 말합니다.
        <br></br>
        당시 전씨는 "이씨와 사이에서 애가 생겼고 혼인신고도 마쳤다"고도 밝힌 것으로 확인됐습니다. 그러면서 "아이를 키울려면 집도 있어야 되고 능력이 있어야 한다. 그런데 이씨는 백수"라면서 "우리 부모님은 한남동에 60~70억 되는 집을 사주겠다고 계약금을 걸었는데 이씨가 돈이 없어서 이를 다 날렸다"고도 이야기합니다.
        </Fade>
        </>
    )
}
export default FadeStrap