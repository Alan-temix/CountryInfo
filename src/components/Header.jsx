import { Nav, Navbar, Form, FormControl,Button, } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import CountryList from "./context/countryList";

const Header = () => {
    const { result } = useContext(CountryList);
    const [inputValue, setInputValue] = useState("");
    const [options, setOptions] = useState([]);
    console.log(result);
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleFormOnSubmit = (e) => {
        e.target.action = `/search/name/${inputValue}`
    }

    useEffect(() => {
        const country = ['Mexico', 'Honduras', 'Ecuador', 'Australia', 'Canada', 'Brazil'];

        const filterOptions = (keyword) => {
            if (keyword && keyword.length > 0) {
                let result = country.filter((element) => {
                    if(element.toString().toLowerCase().includes(keyword.toLowerCase())
                    ){
                      return element;
                    }
                  });
                setOptions(result);
            }
          }

        filterOptions(inputValue);
    }, [inputValue]);

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
                className="mx-2 form-control"
                list="datalistOptions"
                aria-label="Search"
                onChange={handleInputChange}
            />
            <datalist id="datalistOptions">
                {options?.map((element, idx) => <option value={element} key={idx}></option>)}
            </datalist>
        <Link to={`/search/name/${inputValue}`}><Button variant="outline-success">Search</Button></Link>
        </Form>
    </Navbar.Collapse>
    </Navbar>
    </>
    );
}

export default Header;