import { Nav, Navbar, Form, FormControl,Button, } from "react-bootstrap";
import { useState } from "react";
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
    <Navbar className="p-4 border-bottom border-2" bg="light" expand="lg">
    <Navbar.Brand href="/"><h3 className="text-dark">Info Countries</h3></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        <Nav
        className="mr-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
        >
        <Nav.Link className="text-dark" href="/">Home</Nav.Link>
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
    </>
    );
}

export default Header;