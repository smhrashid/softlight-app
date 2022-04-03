import React from 'react'
import { Navbar, Nav, Container, InputGroup, FormControl } from 'react-bootstrap'
const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>

                    <Navbar.Brand href="#home">
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Anywhere"
                                aria-label="Anywhere"
                                aria-describedby="basic-addon2"
                            />
                            <FormControl
                                placeholder="Anytime"
                                aria-label="Anytime"
                                aria-describedby="basic-addon2"
                            />
                            <FormControl
                                placeholder="1 guest"
                                aria-label="1 guest"
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto"></Nav>
                                <Nav>
                                    <Nav.Link href="#deets">FOR YOU</Nav.Link>
                                    <Nav.Link href="#deets">HOMES</Nav.Link>
                                    <Nav.Link href="#deets">EXPERIENCES</Nav.Link>
                                    <Nav.Link href="#deets">PLACES</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </InputGroup>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav className="ml-auto">
                            <Nav.Link href="#deets">Become a Host</Nav.Link>
                            <Nav.Link href="#deets">Help</Nav.Link>
                            <Nav.Link href="#deets">Sign Up</Nav.Link>
                            <Nav.Link href="#deets">Log In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            <Container>
                <div class="p-3 mb-2 bg-primary text-white">
                    <h3>Resorts</h3>
                    <h5>Treat yourself! Your dream resort stay is just a few clicks away.</h5>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="More places than you could ever go (but you can try!)"
                                aria-label="Anywhere"
                                aria-describedby="basic-addon2"
                            />
                            <FormControl
                                placeholder="Check-in - Check-out"
                                aria-label="Anytime"
                                aria-describedby="basic-addon2"
                            />
                            <FormControl
                                placeholder="2 adults . 0 children . 1 room"
                                aria-label="1 guest"
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>  
                </div>
            </Container>
        </header>

    )
}
export default Header