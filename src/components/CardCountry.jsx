import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const CardCountry = ({ name, image, alphaCode, capital, region, area, latitude, longitude }) => {

    return(
        <Card>
        <div style={{width:"50%"}}>
            <Card.Img className="h-100" variant="top" src={image}/>
        </div>
        <Card.Body>
            <Card.Title>Name: {name}</Card.Title>
            <Card.Title>Capital: {capital && capital.length > 0 ? capital : "N/A"}</Card.Title>
            <Card.Text className="m-1"><b>Region: </b>{region}</Card.Text>
            <Card.Text className="m-1"><b>Area: </b>{area}</Card.Text>
            <Card.Text className="m-1"><b>Latitude: </b>{latitude}</Card.Text>
            <Card.Text className="m-1"><b>Longitude: </b>{longitude}</Card.Text>
            <Link to={`/country/${alphaCode}`}><Button variant="primary">Ver más</Button></Link>
        </Card.Body>
        </Card>
    );
}

export default CardCountry;