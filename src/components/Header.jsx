import { Nav, Navbar, NavDropdown, Form, FormControl,Button, } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleFormOnSubmit = (e) => {
        e.target.action = `/search/name/${inputValue}`
        // e.preventDefault();
    }

    return(
    <>
    <Navbar className="p-4" bg="light" expand="lg">
    <Navbar.Brand href="/"><h3 className="text-light">Info Countries</h3></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        <Nav
        className="mr-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
        >
        <Nav.Link className="text-light" href="/">Home</Nav.Link>
        </Nav>
        <Form className="d-flex" onSubmit={handleFormOnSubmit}>
        <FormControl
            type="search"
            placeholder="Search"
            className="mx-2"
            aria-label="Search"
            onChange={handleInputChange}
        />
        <Link to={`/search/name/${inputValue}`}><Button variant="outline-success">Search</Button></Link>
        </Form>
    </Navbar.Collapse>
    </Navbar>
    <div className="custom-shape-divider-top-1631592232">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
    </div>
    </>
    );
}

export default Header;