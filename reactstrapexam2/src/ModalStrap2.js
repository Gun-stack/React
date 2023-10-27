import {Form,FormGroup,Input ,Label, Button , Modal,ModalHeader,ModalBody,ModalFooter,} from 'reactstrap';
import React, { useState } from 'react';

function ModalStrap2(){
    const [modal, setModal] = useState(false);
    const [fruit, setfruit] = useState(true);
    const toggle = () => setModal(!modal);
    const change = (e) => {
        console.log(e.target.value);
        setfruit(e.target.value)
        }

    return(
    <div style={{width:"800px"}}>
        <Form inline onSubmit={(e) => e.preventDefault()}>
            <FormGroup>
                <Label >과일선택</Label>{' '}
                <Input type="select" name="fruit" id="fruit" onChange={change}  >
                    <option value="banana">바나나</option>
                    <option value="apple">사과</option>
                    <option value="orange">오렌지</option>
                </Input>
            </FormGroup>{' '}
         
            <Button color="primary" onClick={toggle} > 전송</Button>
        </Form>
        <Modal isOpen={modal}toggle={toggle} >
            <ModalHeader toggle={toggle}>전송여부 확인 </ModalHeader>
            <ModalBody>
            {fruit}을 선택하셨습니다.
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>전송 </Button>{' '}
                <Button color="secondary" onClick={toggle}>취소</Button>
        </ModalFooter>
      </Modal>

    </div>
    )
}
export default ModalStrap2;