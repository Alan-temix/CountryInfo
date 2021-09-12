import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const CountryInfoFull = ({ data }) => {
    return(
        <div className="countryInfo-container">
            <h3>Country: {data.name}</h3>
            <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={data.flag} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            </Card>
        </div>
    );
}

export default CountryInfoFull;