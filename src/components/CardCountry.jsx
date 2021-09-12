import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const CardCountry = ({ name, image, alphaCode }) => {
    return(
        <Card>
        <Card.Img variant="top" src={image}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Link to={`./country/${alphaCode}`}><Button variant="primary">Ver más</Button></Link>
            </Card.Body>
        </Card>
    );
}

export default CardCountry;

// key={item.numericCode} name={item.name} image={item.flag}