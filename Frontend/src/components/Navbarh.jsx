import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, Form, FormControl, InputGroup } from 'react-bootstrap';
import { Search, Bell, PersonCircle } from 'react-bootstrap-icons';
import { TbMessageDots } from "react-icons/tb";
import { LiaUserFriendsSolid } from "react-icons/lia";

const Navbarh = () => {
  return (
    <Navbar expand="lg" className="linkedin-navbar">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">
          <h1 className="text-white">Job<span className='logo'>ify</span></h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
         
          {/* Right Side Icons */}
          <Nav className="ml-auto align-items-center navri">
             {/* Search Bar */}
          {/* <div className="search-container">
            <Form>
              <InputGroup>
                <InputGroup.Text className="search-icon">
                  <Search />
                </InputGroup.Text>
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="search-input"
                />
              </InputGroup>
            </Form>
          </div> */}
            <Nav.Link as={NavLink} to="/associations" className="nav-icon">
              <LiaUserFriendsSolid size={20} />
              <p>Friends</p>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/notifications" className="nav-icon">
              <Bell size={20} />
              <p>Notifications</p>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/messages" className="nav-icon">
              <TbMessageDots size={20} />
              <p>Message</p>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/profile" className="nav-icon">
              <PersonCircle size={20} />
              <p>Profile</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarh;
