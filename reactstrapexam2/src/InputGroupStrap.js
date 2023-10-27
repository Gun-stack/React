import {InputGroup,InputGroupAddon,InputGroupText,Input,Button, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import React, { useState } from 'react';
function InputGroupStrap(){
    const [open,setOpen] = useState(false);

    return(
        <div  style={{width:'500px'}}>
            <InputGroup>
                <InputGroupAddon addonType='prepend'>@</InputGroupAddon>
                <Input placeholder='username'></Input>
            </InputGroup>
            <br></br>
            <InputGroup>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                        <Input addon type='checkbox' aria-label='Checkbox for following text input' ></Input>
                    </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Check it out" />
            </InputGroup>
            <br></br>
            <InputGroup>
                <Input placeholder="username"/>
                <InputGroupAddon addonType='prepend'> @example.com</InputGroupAddon>
            </InputGroup>
            <br></br>
            <InputGroup>
                <InputGroupAddon addonType='prepend'>$</InputGroupAddon>
                <Input placeholder="Amount" type='number' step="1" />
                <InputGroupAddon addonType='prepend'>.oo</InputGroupAddon>
            </InputGroup>
            <br></br>
            <InputGroup>
                    <InputGroupButtonDropdown addonType='prepend' direction='down' isOpen={open} toggle={()=>setOpen(!open)}>
                        <DropdownToggle caret >Split outline</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Split outline</DropdownItem>
                            <DropdownItem disabled>disabled action</DropdownItem>
                            <DropdownItem>action</DropdownItem>
                            <DropdownItem divider>divider</DropdownItem>
                            <DropdownItem>action</DropdownItem>
                        </DropdownMenu>
                    </InputGroupButtonDropdown>
                <Input/>
            </InputGroup>
        </div>
    )

}
export default InputGroupStrap;