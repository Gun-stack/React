import {Form,FormGroup,Label,Input,Button,Col } from'reactstrap';
function Withdraw(){
    return(
        <div style={{width:"800px" , margin:"10px auto" }}>
            <Form style={{border: "solid lightgray 1px",padding: "30px",borderRadius: "10px"}}>
                    <h2 style={{marginBottom:"30px"}}>출 금</h2>
                    {' '}
                    <FormGroup row > 
                        <Label  for="account"sm={2}>계좌번호</Label>
                        <Col sm={10}>
                            <Input  name='account' placeholder="계좌번호"type="text"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row > 
                        <Label  for="money"sm={2}>출금액</Label>
                        <Col sm={10}>
                            <Input  name='money' placeholder="출금액"type="text"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Button color='primary' size='lg' style={{width:"100%"}}> 출금하기 </Button>
                    </FormGroup>
            </Form>
        </div>
    )

}
export default Withdraw;