import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar expand="lg">
      <div className="container">
        <Navbar.Brand href="index.html">
          <img
            src="images/pod-talk-logo.png"
            className="logo-image img-fluid"
            alt="templatemo pod talk"
          />
        </Navbar.Brand>

        <Form action="#" method="get" className="custom-form search-form flex-fill me-3" role="search">
          <div className="input-group input-group-lg">
            <FormControl
              type="search"
              name="search"
              id="search"
              placeholder="Search Podcast"
              aria-label="Search"
            />
            <Button type="submit" className="form-control" id="submit">
              <i className="bi-search"></i>
            </Button>
          </div>
        </Form>

        <Navbar.Toggle aria-controls="navbarNav" />

        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-lg-auto">
            <Nav.Item>
              <Nav.Link href="index.html" className="nav-link active">Home</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="about.html" className="nav-link">About</Nav.Link>
            </Nav.Item>

            <NavDropdown title="Pages" id="navbarLightDropdownMenuLink">
              <NavDropdown.Item href="listing-page.html">Listing Page</NavDropdown.Item>
              <NavDropdown.Item href="detail-page.html">Detail Page</NavDropdown.Item>
            </NavDropdown>

            <Nav.Item>
              <Nav.Link href="contact.html" className="nav-link">Contact</Nav.Link>
            </Nav.Item>
          </Nav>

          <div className="ms-4">
            <a href="#section_3" className="btn custom-btn custom-border-btn smoothscroll">Get started</a>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavBar;
