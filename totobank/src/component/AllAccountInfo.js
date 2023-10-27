import {Form,FormGroup,Label,Col,Input,Collapse,Table, Button} from 'reactstrap'
function AllAccountInfo(){
    return(
    <div style={{width:"800px" , margin:"10px auto" }}>
        <Form style={{border: "solid lightgray 1px",padding: "30px",borderRadius: "10px"}}>
                        <h2 style={{marginBottom:"30px"}} >전체계좌조회</h2>
                        {' '}    
            <FormGroup row > 
                <Table bordered > 
                    <thead>
                    <tr>
                        <th>계좌번호</th>
                        <th>이름</th>
                        <th>잔액</th>
                        <th>계좌종류</th>
                        <th>계좌등급</th>
                    </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>10101</td>
                            <td>홍길동</td>
                            <td>100000</td>
                            <td>Normal</td>
                        </tr>
                        <tr>
                            <td>10201</td>
                            <td>김길동</td>
                            <td>200000</td>
                            <td>Special</td>
                            <td>Gold</td>
                        </tr>
                        <tr>
                            <td>10202</td>
                            <td>이길동</td>
                            <td>300000</td>
                            <td>Special</td>
                            <td>VIP</td>
                        </tr>
                        <tr>
                            <td>10102</td>
                            <td>최길동</td>
                            <td>300000</td>
                            <td>Normal</td>
                        </tr>
                        <tr>
                            <td>10203</td>
                            <td>고길동</td>
                            <td>300000</td>
                            <td>Special</td>
                            <td>Silver</td>
                        </tr>
                    </tbody>
                </Table>                    
            </FormGroup>
        </Form>    
    </div>
    )
}
export default AllAccountInfo;