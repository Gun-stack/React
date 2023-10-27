import { UncontrolledCarousel } from 'reactstrap'
function CarouselStrap(){
    const items = [
        {
            src : 'cap.PNG',
            altText : '캡처1',
            caption : 'cap',
            header : 'cap'

        },
        {
            src : 'cap2.PNG',
            altText : '캡처2',
            caption : 'cap2',
            header : 'cap2'
        },
        {
            src : 'cap3.PNG',
            altText : '캡처3',
            caption : 'cap3',
            header : 'cap3'
        }
    ]

    return(
        <UncontrolledCarousel style={{width:"500px",height:"500px",margin: '0 auto', color:'black'}} items={items}/>
        
        
        
    )

}
export default CarouselStrap;