import React from 'react'
import { Navbar, Container, Row, Col, Dropdown } from 'react-bootstrap'
const Footer = () => {
    return (
        <footer>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <header>
                        <Row className="show-grid">
                            <Col xs={12} md={3}>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Dropdown Button
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col xs={6} md={3}>
                                <code>{'<Col xs={6} md={4} />'}</code>
                            </Col>
                        </Row>
                    </header>
                </Container>
            </Navbar>
        </footer>
    )
}
export default Footer