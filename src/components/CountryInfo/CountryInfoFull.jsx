import React, { useState, useEffect } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
// 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const CountryInfoFull = ({ data }) => {
    const [weatherDetails, setWeatherDetails] = useState(null);

    const convertArray = () => {
        for(const key in data.currencies) {
            return "";
        }
    }

    useEffect(() => {
        if(data) {
            (async () => {
                // let APIKey = 'a52f1d3bcdb5f088cbb7960342e26bc4'
                // let url = `https://api.openweathermap.org/data/2.5/weather?q=${data.capital}&appid=${APIKey}`;
                // const d = await fetch(url).then(res => res.json());
                // console.log(d);
                // setWeatherDetails(d)
                
                console.log(data);
            })();
        }
    }, [])

    return(
        <div className="countryInfo-container">
            <h3>Country: {data.name.official}</h3>
            <Card style={{ width: '100%', display: "flex", flexDirection: "row" }}>
            <Card.Img style={{width: '50%', border: '1px solid black'}} variant="top" src={data.flags[0]} />
            <Card.Body style={{width: '50%'}}>
                <div>
                    <Card.Title style={{textAlign: "center"}}><b>Common name: </b>{data.name.common}</Card.Title>
                    <Card.Title style={{textAlign: "center"}}><b>Capital: </b>{data.capital[0]}</Card.Title>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam modi maiores expedita nisi rerum optio soluta consequuntur eaque, iure, iste ratione incidunt officia sequi esse nulla molestias ab ipsum voluptas. Nobis aspernatur ipsa possimus nihil vitae maiores.
                </div>
                    <Card.Text className="d-flex justify-content-between p-t-2">
                        <div>
                            <Card.Text className="m-0"><b>Region: </b>{data.region}</Card.Text>
                            <Card.Text className="m-0"><b>Subregion: </b>{data.subregion}</Card.Text>                            
                            <Card.Text className="m-0"><b>Latitude: </b>{data.latlng[0]}</Card.Text>
                            <Card.Text className="m-0"><b>Longitude: </b>{data.latlng[1]}</Card.Text>
                        </div>
                        <div>
                            <Card.Text className="d-block m-0"><b>Area: </b>{data.area}</Card.Text>
                            {Object.values(data.currencies).map((item, index) => (<Card.Text className="m-0"><b>Currencies: </b>{`${item.name} "${item.symbol}"`} </Card.Text>))}
                            <Card.Text className="m-0"><b>Borders: </b>{data.borders ? data.borders.map((item, index) => (<span className="text-decoration-none" key={index} alt={index}>{data.borders.length === 1 ? <Card.Link className="text-decoration-none" href={`/country/${item}`}>{item}</Card.Link> : index === data.borders.length - 1 ? <Card.Link href={`/country/${item}`}>{`${item}.`}</Card.Link> : <Card.Link href={`/country/${item}`}>{`${item}, `}</Card.Link>}</span>)) : "No borders"}</Card.Text>
                        </div>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem><b>Languages:</b> </ListGroupItem>
                            {Object.values(data.languages).map((item, index) => (<ListGroupItem key={index}>{item}</ListGroupItem>))}
                        </ListGroup>
                    </Card.Text>
            </Card.Body>
            </Card>
            {/* <Card.Link href="/"><FontAwesomeIcon icon={faCoffe} />Home</Card.Link> */}
            {/* <FontAwesomeIcon icon="coffee" size="xs" /> */}
        </div>
    );
}

export default CountryInfoFull;