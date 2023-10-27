import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from 'reactstrap';
    function BankHeader(){
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);
        

      return(
        <div style={{height:"50px"}}>
            <Navbar color='light' light fixed='top' expand  full >
                <NavbarBrand href="/" >KOSTA</NavbarBrand>
                {' '}
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="m1-auto" navbar  >
                        
                        <NavItem >
                            <NavLink href="/MakeAccount">계좌개설</NavLink> 
                        </NavItem>
                        <NavItem>
                            <NavLink href="/AccountInfo">
                            계좌조회
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                            입출금
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href='/Deposit'>입금하기</DropdownItem>
                                <DropdownItem href='/Withdraw' >출금하기</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href='/'>Reset</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem> 
                            <NavLink  href="/AllAccountInfo">전체계좌조회</NavLink> 
                        </NavItem>
                    </Nav>
                </Collapse>
                    <Nav navbar >
                        <NavItem>
                            <NavLink href="/login">로그인</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/join">회원가입</NavLink>
                        </NavItem>
                    </Nav>
                <NavbarText>Kosta Bank</NavbarText>
                <NavbarBrand href="/" ></NavbarBrand>
            </Navbar>
        </div>
      )



}
export default BankHeader;