import React, { useState, useEffect } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { createClient } from "pexels";

const CountryInfoFull = ({ data }) => {

    const [weatherDetails, setWeatherDetails] = useState(null);

    useEffect(() => {
        if(data.length > 0) {
            (async () => {
                let APIKey = 'a52f1d3bcdb5f088cbb7960342e26bc4'
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${data.capital}&appid=${APIKey}`;
                const d = await fetch(url).then(res => res.json());
                console.log(d);
                setWeatherDetails(d)
                console.log(data);
            })();
        }
    }, [])

    return(
        <div className="countryInfo-container">
            <h3>Country: {data.name}</h3>
            <Card style={{ width: '100%', display: "flex", flexDirection: "row" }}>
            <Card.Img style={{width: '50%', border: '1px solid black'}} variant="top" src={data.flag} />
            <Card.Body style={{width: '50%'}}>
                <div>
                    <Card.Title style={{textAlign: "center"}}>Native Name: {data.nativeName}</Card.Title>
                    <Card.Title style={{textAlign: "center"}}>Capital: {data.capital}</Card.Title>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam modi maiores expedita nisi rerum optio soluta consequuntur eaque, iure, iste ratione incidunt officia sequi esse nulla molestias ab ipsum voluptas. Nobis aspernatur ipsa possimus nihil vitae maiores.
                </div>
                    <Card.Text className="d-flex justify-content-between">
                        <div>
                            <span className="d-block">Region: {data.region}</span>
                            <span className="d-block">Subregion: {data.subregion}</span>                            
                            <span className="d-block">Latitude: {data.latlng && data.latlng[0]}</span>
                            <span className="d-block">Longitude: {data.latlng && data.latlng[1]}</span>
                        </div>
                        <div>
                            <span className="d-block">Population: {data.population}</span>
                            <span className="d-block">Currencies: {data.currencies && `${data.currencies[0].name} ${data.currencies[0].symbol}`}</span>
                            <span className="d-block">Borders: {data.borders && data.borders.map((item, index) => (<span key={index} alt={index}>{data.borders.length === 1 ? item : `${item}, `}</span>))}</span>
                        </div>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>TimeZones: </ListGroupItem>
                            {data.timezones && data.timezones.map((item, index) => (<ListGroupItem key={index}>{item}</ListGroupItem>))}
                        </ListGroup>
                    </Card.Text>
            </Card.Body>
            </Card>
            <Card.Link href="/">Go back</Card.Link>
        </div>
    );
}

export default CountryInfoFull;