import { UncontrolledCollapse,Button, Card, CardBody, CardImg } from 'reactstrap'
function CollapseStrap(){

    return(
        <>
        <Button color='warning' id="toggle"> 펼치기/접기</Button>
        <UncontrolledCollapse toggler='#toggle'>
            <Card>
                <CardImg src='nam.jpg' style={{width:'600px',height:'100%' ,margin:'0 auto'}}/>
                <CardBody style={{textAlign:'left',margin:'0 auto',width:'600px',height:'100%' }}>
                <p>
                    앞서 전씨는 한 여성지와의 인터뷰를 통해 자신을 "미국에서 태어난 뉴욕에서 승마를 전공하고 글로벌 IT 기업 임원으로서 현재는 국내에서 아이들을 대상으로 예체능 심리학 예절교육원을 운영하고 있다"고 밝혔습니다.
                </p>
                <p>
                    하지만 JTBC가 입수한 녹취 파일에선 전씨가 "남자친구와의 혼전 임신으로 돈이 필요하다"며 남자친구 주변인들에게 돈을 요구하는 정황이 고스란히 담겨있습니다.
                </p>
                <p>
                    녹취 시점은 지난 2020년 1월로, 전씨는 "예절교육학원을 할 건데 사무실도 필요하고 해서 남자친구인 이모씨 이름으로 대출이 이뤄질 것"이라고 남자친구 지인에게 설명하고 있습니다. 그러면서 "내가 보증인으로 들어가면 대출이 꽤 나온다. 아는 은행장도 있고 20살 때부터 신용카드를 써서 신용 등급이 꽤 좋다. 내가 보증인을 서면 대출이 많이 나올 것"이라고 말합니다.
                </p>
                <p>
                    당시 전씨는 "이씨와 사이에서 애가 생겼고 혼인신고도 마쳤다"고도 밝힌 것으로 확인됐습니다. 그러면서 "아이를 키울려면 집도 있어야 되고 능력이 있어야 한다. 그런데 이씨는 백수"라면서 "우리 부모님은 한남동에 60~70억 되는 집을 사주겠다고 계약금을 걸었는데 이씨가 돈이 없어서 이를 다 날렸다"고도 이야기합니다.

                </p>
                </CardBody>
            </Card>

        </UncontrolledCollapse>
        </>
    )
}
export default CollapseStrap