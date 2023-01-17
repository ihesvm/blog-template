import React from 'react'
import { Button, Container, Form, Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

function Navbars() {
  return (
    <Navbar collapseOnSelect variant="dark" bg="dark" expand="lg">
        {/* <div className='container-fluid'>
            <a className='navbar-brand text-white' href="#">Blog Template</a>
        </div> */}
        <Container fluid>
          <Navbar.Brand href="#" className="text-white">Blog Template</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"/>

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{maxHeight: '100px'}}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Posts</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item href="#action4">Another Action</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item href="#action5">Another Action</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="search"
                className="me-2"
                aria-lable="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>


          </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navbars