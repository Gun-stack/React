import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
function ModalStrap(){
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return(
        <div>
        <Button color="danger" onClick={toggle}>
            기사보기
        </Button>
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>방화복 입고 101층 계단을 21분 3초 만에 뛰어오른 그대 이름은 ‘소방관’</ModalHeader>
            <ModalBody>
            25일 부산 해운대구 엘시티(LCT) 랜드마크 건물에서 ‘2023 전국소방공무원 계단 오르기 대회’가 열렸다. 895명이 참가한 이 날 대회는 전원이 완주했다. 간소복 분야 가장 빠른 기록은 15분 39초였다. 이날 계단 오르기 대회에 참가한 소방관들의 공통된 마음은 ‘구조한다는 마음’이었다.
            </ModalBody>
            <ModalBody>
            이날 부산소방재난본부가 개최한 2023 전국소방공무원 해운대 엘시티 계단 오르기 대회는 경쟁부문(방화복, 간소복, 4인 계주)과 비경쟁 부문으로 나눠서 진행됐다. 엘시티는 총 높이가 411.6m, 101층 규모다. 계단만 2372개에 이른다. 서울 롯데타워(555m·123층)에 이은 우리나라에서 두 번째로 높은 건물이다.
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>확인</Button>{' '}
                <Button color="secondary" onClick={toggle}>취소</Button>
            </ModalFooter>
        </Modal>
    </div>
    )

}
export default ModalStrap;