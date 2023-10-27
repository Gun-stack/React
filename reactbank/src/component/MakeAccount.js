import {Form,FormGroup,Label,Input,Button,Col } from'reactstrap';
function MakeAccount () {
    return(
        <div style={{width:"800px" , margin:"10px auto"}}>
            <Form style={{border: "solid lightgray 1px",padding: "30px",borderRadius: "10px"}}>
                <h2 style={{marginBottom:"30px"}}>계좌개설</h2>
                <FormGroup row>
                    <Label for="account"sm={2}>
                    계좌번호
                    </Label><Col sm={10}>
                    <Input  placeholder="계좌번호"type="text"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="name"sm={2}>이름</Label> 
                    <Col sm={10}>
                        <Input  placeholder="이름"type="text"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="money"sm={2}>입금액</Label> 
                    <Col sm={10}>
                        <Input  placeholder="입금액"type="text"/>
                    </Col>
                </FormGroup>

                <FormGroup row > 
                <legend className="col-form-label col-sm-2"> 계좌종류 </legend>
                <Col sm={4}>
                    <FormGroup check inline>
                        <Input id='일반' name="radio1"type="radio"/>
                        {' '}
                        <Label check for='일반'> 일반계좌</Label>
                        {' '}
                    </FormGroup>
                </Col>
                <Col sm={6}>
                        {' '}
                    <FormGroup check inline>
                        {' '}
                        <Input id='특수'  name="radio1"type="radio"/>
                        {' '}
                        <Label check for='특수'> 특수계좌</Label>
                    </FormGroup>
                </Col>
                </FormGroup>
                <FormGroup row>
                        <Label for="grade"sm={2}>등급</Label>
                        <Col sm={10}>
                        <Input id="grade" name="grade" type="select" >
                            <option disabled selected>선택하세요</option>
                            <option>Normal</option>
                            <option>Silver</option>
                            <option>Gold</option>
                            <option>VIP</option>
                        </Input>
                        </Col>
                </FormGroup>
                <FormGroup>
                    <Button color='primary' size='lg' style={{width:"100%" ,marginTop:"30px"}}> 제출하기 </Button>
                </FormGroup>
            </Form>
        </div>
    )
  }
  export default MakeAccount;