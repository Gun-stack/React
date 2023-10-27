import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
function ModalStrap3() {  
    const [modal, setModal] = useState(false);
    const [nestedModal1, setNestedModal1] = useState(false);
    const [nestedModal2, setNestedModal2] = useState(false);
    const [closeAll, setCloseAll] = useState(false);
  
    const toggle = () => setModal(!modal);

    const toggleNested1 = () => {
      setNestedModal1(!nestedModal1);
      setCloseAll(false);
    };
    const toggleNested2 = () => {
        setNestedModal2(!nestedModal2);
        setCloseAll(false);
      };
    const toggleAll = () => {
      setNestedModal1(!nestedModal1);
      setNestedModal2(!nestedModal2);
      setCloseAll(true);
    };


    return(
        <div style={{width:"1000px"}}>
            <Button color='danger' onClick={toggle}> 첫 모달</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>베트남서 韓 패키지 관광객 사망…모두투어, 임직원 등 위기대응팀 급파</ModalHeader>
                <ModalBody>
                    <Button color="success" onClick={toggleNested1}>1-1</Button>
                    <Modal isOpen={nestedModal1}toggle={toggleNested1} onClosed={closeAll ? toggle : undefined}>
                        <ModalHeader>1-1모달 제목</ModalHeader>
                        <ModalBody>1-1</ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggleNested1}>
                                닫기
                            </Button>{''}
                            <Button color="secondary" onClick={toggleAll}>
                                전체 닫기
                            </Button>
                        </ModalFooter>
                    </Modal>
                    {' '}
                    <Button color="success" onClick={toggleNested2}>1-2</Button>
                    <Modal isOpen={nestedModal2}toggle={toggleNested2} onClosed={closeAll ? toggle : undefined}>
                        <ModalHeader>1-2</ModalHeader>
                        <ModalBody>1-2</ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggleNested2}>
                                닫기
                            </Button>{' '}
                            <Button color="secondary" onClick={toggleAll}>
                            전체 닫기
                            </Button>
                        </ModalFooter>
                    </Modal>
                    </ModalBody>
            </Modal>
    
        </div>
    )
}
export default ModalStrap3