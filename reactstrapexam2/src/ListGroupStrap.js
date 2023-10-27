import React, { useState } from 'react';
import {ListGroup,ListGroupItem,Badge, ListGroupItemHeading, ListGroupItemText} from 'reactstrap'  ;
function ListGroupStrap() {
    return(
        <div style={{width:'700px'}}>
        <ListGroup>
            <ListGroupItem className="justify-content-between">Cras justo odio{' '}<Badge pill>14</Badge></ListGroupItem>
            <ListGroupItem className="justify-content-between">Dapibus ac facilisis in{' '}<Badge pill>2</Badge></ListGroupItem>
            <ListGroupItem className="justify-content-between">Morbi leo risus{' '}<Badge pill>1</Badge></ListGroupItem>
        </ListGroup>
        <br></br>
        <ListGroup>
            <ListGroupItem className="justify-content-between"  tag='a' href='https://n.news.naver.com/article/437/0000364633?ntype=RANKING'>
                새벽 112 신고, 전청조 '스토킹 혐의' 체포…남현희 "완전히 속았다"{' '}<Badge pill>14</Badge></ListGroupItem>
            <ListGroupItem className="justify-content-between"tag='a' href='https://n.news.naver.com/article/437/0000364628?ntype=RANKING'>
                대통령실 "윤 대통령, 29일 이태원참사 시민추모대회 참석 안해"{' '}<Badge pill>2</Badge></ListGroupItem>
            <ListGroupItem className="justify-content-between"tag='a' href='https://n.news.naver.com/article/277/0005331346?ntype=RANKING'>
                1명 모집하는데 3679명 몰려왔다…역대급 취업난에 난리난 中 공무원 시험{' '}<Badge pill>1</Badge></ListGroupItem>
        </ListGroup><br></br>
        <ListGroup>
            <ListGroupItem >
                <ListGroupItemHeading>
                "남현희와 결혼 예정" 밝힌 전청조 체포…스토킹 혐의(종합2보)
                </ListGroupItemHeading>
                <ListGroupItemText>
                여러 차례 전화하고 새벽에 남씨 모친 집 찾아와 문 흔들어 이별 통보받고 범행…경찰, 접근·전화·메시지 금지 조치 후 석방
                </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
                <ListGroupItemHeading>
                이마트 "'반값 킹크랩' 이번주 더 싸고 물량은 3배 이상 늘렸다"
                </ListGroupItemHeading>
                <ListGroupItemText>
                한우도 반값 할인…과일은 상품권 증정 행사
                </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
                <ListGroupItemHeading>
                "9시 출근, 5시 퇴근… 데이트는 언제해?" 충격받은 美 20대 '눈물 펑펑'
                </ListGroupItemHeading>
                <ListGroupItemText>
                "주 40시간 근무는 미쳤다" 누리꾼들 공감
                </ListGroupItemText>
            </ListGroupItem>
        </ListGroup>

        </div>
    )
}
export default ListGroupStrap;