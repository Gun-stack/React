import { Form,Label,Input,FormGroup,FormText,Button,Col } from 'reactstrap';
function FormStrap(){
    return(
        <div style={{width:'600px' ,margin:'50px auto'}}>
            <Form >
                <FormGroup row > 
                    <Label for="examEmail" sm={2}>email</Label> 
                    <Col sm={10}>
                    <Input type="email" name="email" id="examEmail" placeholder='email' />
                    </Col>
                </FormGroup>
                <FormGroup floating>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Email"
                        type="email"
                    />
                    <Label for="exampleEmail">
                        Email
                    </Label>
                </FormGroup>

                <FormGroup row>
                    <Label for="examPassword"sm={2}>Password</Label>
                    <Col sm={10}>
                    <Input type="password" name="password" id="examPassword" placeholder='Password'/>
                    </Col>
                </FormGroup>

                <FormGroup row >
                    <Label for="examSelect" sm={2} >Select</Label>
                    <Col sm={10}>
                    <Input type="select" name="select" id="examSelect" >
                        <option>1번옵션</option>
                        <option>2번옵션</option>
                        <option>3번옵션</option>
                        <option>4번옵션</option>
                        <option>5번옵션</option>
                    </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examText"sm={2}>Text Area</Label>
                    <Col sm={10}>
                    <Input type="textarea" name="text" id="examText" >
                    </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examFile"sm={2}>File</Label>
                    <Col sm={10}>
                    <Input type="file" name="file" id="examFile" >
                    </Input>
                    
                    <FormText color='muted'>
                        this is some placeholder block level help text for the above input.
                        it's a bit lighter and easily wraps to a new line.
                    </FormText>
                    </Col>
                </FormGroup>
                <FormGroup tag='fieldset' style={{border:"solid grey 1px", textAlign:'left', padding:"20px"}} row>
                    <legend>Radio Button</legend>
                    <FormGroup check>
                        <Label check>
                            <Input type='radio' name='radio1'/>{''}
                            Option one is this and that-be sure to include why it's great.
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='radio' name='radio1'/>{''}
                            Option two can be something else and selecting it will deselct option one 
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='radio' name='radio1' disabled/>{''}    
                            Option three is disabled
                        </Label>
                    </FormGroup>
                </FormGroup>
                <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='checkbox1' />{''}
                            Check me out
                        </Label>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
            <br></br>
            <Form inline>
                <FormGroup floating>
                        <Input id="examEmail2"name="email2" placeholder="something@idk.cool"type="email"/>{''}
                        <Label for="examEmail2">Email</Label>
                </FormGroup>

            </Form>
        </div>
    )

}
export default FormStrap;