import React from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Row,
} from 'react-bootstrap';
import style from './content.module.scss';

export default function ContentAdmin() {
  return (
    <>
      <Navbar expand="lg" className={`bg-body-tertiary  ${style.navbar}`}>
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            className="justify-content-between"
          >
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-3 "
                aria-label="Search"
              />
              <Button variant="outline-dark">Search</Button>
            </Form>

            <Row className='align-items-center'>
              <Col md={3}></Col>
              <Col md={3}></Col>
              <Col md={3}>
                <div className="d-flex justify-content-center align-items-center">
                  <span className='pe-2'>User</span>
                  <span>
                    <i className="fa-solid fa-user border border-2 rounded-circle p-2"></i>
                  </span>
                </div>
              </Col>
            </Row>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
