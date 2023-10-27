import { Badge,Button } from 'reactstrap';
function ButtonStrap(){
    return(
        <>
        <h1>PRODUCT NAME <Badge color='secondary'>HIT</Badge></h1>

        <Button color='warning' outline>
            Accessor <Badge  color='dark'> 4</Badge> 
        </Button>
        <Badge color='danger' pill>pill</Badge>

        <Badge href="http://daum.net" color='light'>goL ink</Badge>
        </>
    )

}
export default ButtonStrap;