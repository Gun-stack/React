import React, { useState } from 'react';
import {
    Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText,} from 'reactstrap';

function NavbarStrap(){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <div style={{width:"800px"}} >
            <Navbar color='light' light expand="md">
                <NavbarBrand href="/"  className='mr-auto' >kosta</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar >
                    <Nav navbar className="m1-auto">
                        <NavItem>
                            <NavLink href="https://naver.com">naver</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://daum.net">
                                daum
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>
                                <DropdownItem>Option 3</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
        </Navbar>
    </div>
    )

}
export default NavbarStrap;