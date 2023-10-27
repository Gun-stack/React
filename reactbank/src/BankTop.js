import React, { useState } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText,} from 'reactstrap';
    function BankTop(){
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);

        return(
            <>
            </>
        )

    }
export default BankTop;