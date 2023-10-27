import {Button,UncontrolledCarousel} from 'reactstrap';
const Section7=()=>{
    const items=[{altText: '',
        caption: '',
        key: 1,
        src: '/card-1.png'
        },
        {
        altText: '',
        caption: '',
        key: 2,
        src: '/card-2.png'
        },
        {
        altText: '',
        caption: '',
        key: 3,
        src: '/card-3.png'
        },
        {altText: '',
        caption: '',
        key: 4,
        src: '/card-4.png'
        },
        {altText: '',
        caption: '',
        key: 5,
        src: '/card-5.png'
        }];
    return(
        <div style={{width:"100%"}}>
            <div className='componentBox2' >
                <span className='L-text'>
                프렌즈 체크카드,<br/>
                내가 고르는 선택의 즐거움
                </span> 
                <span className='S-text'>
                프렌즈 디자인부터 멋스러운 블랙 컬러 카드까지 원하는 디자인과 기능을 선택할 수 있습니다.
                </span><br/>    
                <Button color='light' size='md'>카카오뱅크 프렌즈 체크카드&gt;</Button> 
                <br/><br/><br/>
                    <UncontrolledCarousel items={items} />

            </div>
        </div>


    )
}
export default Section7;