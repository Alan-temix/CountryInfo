import { Nav, Navbar, NavDropdown, Form, FormControl,Button, } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleFormOnSubmit = (e) => {
        e.preventDefault();
    }

    return(
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="./">Info Countries</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        <Nav
        className="mr-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
        >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
            Link
        </Nav.Link>
        </Nav>
        <Form className="d-flex" onSubmit={handleFormOnSubmit}>
        <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
            onChange={handleInputChange}
        />
        <Link to={`/search/name/${inputValue}`}><Button variant="outline-success">Search</Button></Link>
        </Form>
    </Navbar.Collapse>
    </Navbar>
    );
}

export default Header;