import { useState } from 'react'
import {Form,FormGroup,Label,Col,Input,Collapse,Table, Button} from 'reactstrap'

function AccountInfo(){
    const [isOpen,setIsOpen] =useState(false);
    const toggle = ()=>setIsOpen(!isOpen)
    return(
        <div style={{width:"800px" , margin:"10px auto"}}>
                <Form style={{border: "solid lightgray 1px",padding: "30px",borderRadius: "10px"}}>
                    <h2 style={{marginBottom:"30px"}}>계좌조회</h2>
                    {' '}
                    <FormGroup row > 
                        <Label  for="account"sm={2}>계좌번호</Label>
                        <Col sm={7}>
                            <Input   placeholder="계좌번호"type="text"/>
                        </Col>
                        <Col sm={3} >
                            <Button color='primary' onClick={toggle} size='md'>계좌개설</Button>
                        </Col>
                    </FormGroup>
                    <FormGroup row > 
                        <Collapse isOpen={isOpen} style={{margin:"0 auto" , marginTop:"30px", width:"80%"}}>
                            <Table bordered > 
                                <tbody>
                                    <tr>
                                        <th scope="row">계좌번호</th>
                                        <td>10101</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">이름</th>
                                        <td>홍길동</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">잔액</th>
                                        <td>100000</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">계좌종류</th>
                                        <td>Normal</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Collapse>
                    </FormGroup>
                </Form>
        </div>
    )

}
export default AccountInfo