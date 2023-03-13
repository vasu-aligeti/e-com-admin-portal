import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  let user = JSON.parse(localStorage.getItem('userData'))

  return (
    <div>
      <Navbar color="light" light expand="md" style={{borderBottom: '1px solid rgba(0,0,0,0.1)'}}>
        <NavbarBrand href="/" >Better Buy</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="" >Admin</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" color='light'>Seller</NavLink>
            </NavItem>
          </Nav>
          <NavbarText color='light'>{user.firstName}</NavbarText>
        </Collapse>
       
      </Navbar>
    </div>
  );
}

export default Topbar;