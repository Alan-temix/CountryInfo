import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTemperatureHigh, faCloud, faTint, faWater, faRulerVertical} from '@fortawesome/free-solid-svg-icons'

const CountryInfoFull = ({ data }) => {
    const [weatherDetails, setWeatherDetails] = useState(null);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    const kelvinToCelcius = (kelvin) => {
        let result = (kelvin - 273).toFixed();
        return `${result} °C`;
    }

    useEffect(() => {
        if(data) {
            (async () => {
                let APIKey = '3be5b5117c87f54bca3575c22adb48d3'
                let query = "";
                data.capital && data.capital[0].length > 0 ? query = `q=${data.capital[0]}` : query =  `lat=${data.latlng[0]}&lon=${data.latlng[1]}`;
                let url = `https://api.openweathermap.org/data/2.5/weather?${query}&appid=${APIKey}`;

                const d = await fetch(url).then(res => res.json());
                setWeatherDetails(d)
            })();
        }
    }, [])

    return(
        <div className="countryInfo-container">
            <h3>Country: {data.name.official}</h3>
            <Card className="d-flex flex-row">
            <div className="w-50 w-md-100">
                <Card.Img className="border border-secondary h-100" variant="top" src={data.flags[0]} />
            </div>
            <Card.Body>
                    <Card.Title className="text-center"><b>Common name: </b>{data.name.common}</Card.Title>
                    <Card.Title className="text-center"><b>Capital: </b>{data.capital && data.capital[0].length ? data.capital[0] : "This Country Doesn't have Capital"}</Card.Title>
                    {weatherDetails && <div><Card.Text><FontAwesomeIcon icon={faCloud} /> Current Weather: {capitalizeFirstLetter(weatherDetails.weather[0].description)} <FontAwesomeIcon icon={faCloud} /></Card.Text> <Card.Text><FontAwesomeIcon icon={faTint} /> Humidity: {weatherDetails.main.humidity} <FontAwesomeIcon icon={faTint} /></Card.Text> <Card.Text><FontAwesomeIcon icon={faRulerVertical} /> Pressure: {weatherDetails.main.pressure}.<FontAwesomeIcon icon={faRulerVertical} /></Card.Text> <Card.Text> <FontAwesomeIcon icon={faWater} /> Sea Level : {weatherDetails.main.sea_level ? weatherDetails.main.sea_level : "Info No Available"}. <FontAwesomeIcon icon={faWater} /></Card.Text> <Card.Text> <FontAwesomeIcon icon={faTemperatureHigh} /> Temperature: {kelvinToCelcius(weatherDetails.main.temp)} <FontAwesomeIcon icon={faTemperatureHigh} /></Card.Text></div>}
                    <Card.Body style={{flexDirection: "column", border: "1px solid gray", padding: 10, marginTop: 10}}  className="d-flex justify-content-between p-t-2 text-center">
                        <div>
                            <Card.Text className="m-0"><b>Region: </b>{data.region}</Card.Text>
                            <Card.Text className="m-0"><b>Subregion: </b>{data.subregion}</Card.Text>                            
                            <Card.Text className="m-0"><b>Latitude: </b>{data.latlng[0]}</Card.Text>
                            <Card.Text className="m-0"><b>Longitude: </b>{data.latlng[1]}</Card.Text>
                        </div>
                        <div>
                            <Card.Text className="d-block m-0"><b>Area: </b>{data.area}</Card.Text>
                            {data.currencies && Object.values(data.currencies).map((item, index) => (<Card.Text className="m-0" key={index}><b>Currencies: </b>{`${item.name} "${item.symbol}"`} </Card.Text>))}
                            <Card.Text className="m-0"><b>Borders: </b>{data.borders ? data.borders.map((item, index) => (<span className="text-decoration-none" key={index} alt={index}>{data.borders.length === 1 ? <Card.Link className="text-decoration-none" href={`/country/${item}`} key={index}>{item}</Card.Link> : index === data.borders.length - 1 ? <Card.Link href={`/country/${item}`} key={index}>{`${item}.`}</Card.Link> : <Card.Link href={`/country/${item}`} key={index}>{`${item}, `}</Card.Link>}</span>)) : "No borders"}</Card.Text>
                        </div>
                        <div >
                            <Card.Text className="d-block m-0"><b>Languages: </b></Card.Text>
                            {data.languages ? Object.values(data.languages).map((item, index) => (<><span key={index}>{item}</span><br /></>)) : "This Country Doesn't Have Languages"}
                        </div>
                    </Card.Body>
            </Card.Body>
            </Card>
            <Card.Link href="/" className="text-dark text-decoration-none"><FontAwesomeIcon className="mt-3" icon={faHome} color="black" size="2x" /><Card.Text className="m-0">Home</Card.Text></Card.Link>
        </div>
    );
}

export default CountryInfoFull;