import { useState } from 'react';
import { ButtonDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
function DropDownStrap(){
    const [open,setOpen] = useState(false);
    return(
    <>
        <ButtonDropdown direction='down' isOpen={open} toggle={()=>setOpen(!open)}>
            <DropdownToggle caret color='primary' size='small'>버튼 DropDown</DropdownToggle>
            <DropdownMenu  >
                <DropdownItem header >Header</DropdownItem>
                <DropdownItem divider ></DropdownItem>
                <DropdownItem disabled>비활성화 버튼</DropdownItem>
                <a href='http://daum.net'>
                    <DropdownItem>다음사이트로 이동</DropdownItem>
                </a>
                <DropdownItem onClick={()=>alert('alert버튼')}>alert버튼</DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>    


    </>)
}
export default DropDownStrap;