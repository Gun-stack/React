import { Button, CardBody, CardImg, CardSubtitle, CardText, CardTitle,Card } from 'reactstrap'

function CardStrap(){
    return(
    <>
        <Card style={{width:"20%", height:'100%',margin:'10px auto',backgroundColor:"transparent"}} >
            <CardImg  style={{backgroundColor:"red",margin:'10px auto', width:'90%'}} src="logo192.png" alt="logo192"/>
            <CardBody>
                <CardTitle>REACT</CardTitle>
                <CardSubtitle>front Component </CardSubtitle>
                <CardText>React is front Component</CardText>
                <Button className="btn-primary" >조회</Button>
            </CardBody>

            <Card body style={{width:'90%',margin:'10px auto',textAlign:'left'}}>
                <CardTitle> 이름 : 카드제목</CardTitle>
                <CardSubtitle>직업 : 카드부제목 </CardSubtitle>
                <CardText> 특성 : 카드내용 어쩌구</CardText>
                <Button>선택</Button>
            </Card>

        </Card>
    </>
    )
}
export default CardStrap