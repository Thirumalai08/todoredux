import React, { useState } from 'react'
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'

function Topnav(){
    const [isOpen,setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return(
        <div>
            <Navbar color="dark " dark expand="md">
                <Container>
                <NavbarBrand href="/">Todo</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/">Components</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="https://github.com/Thirumalai08">GitHub</NavLink>
                </NavItem>
                </Nav>
                </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default Topnav