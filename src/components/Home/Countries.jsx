import { useRef, useState, useEffect } from "react";
import CardCountry from "../CardCountry";

const Countries = () => {
    const [data, setData] = useState([]);

    const exampleRef = useRef();

    async function fetchData() {
        try {
            const url = 'https://restcountries.com/v3/all';
            let response = await fetch(url).then((response) => response.json());
            setData(response);
            console.log(response[0]);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
    <div ref={exampleRef} className="p-4 countries-container">
        {data.slice(0, 24).map((item) => (<CardCountry key={item.cca3} name={item.name.common} image={item.flags[0]} alphaCode={item.cca3} capital={item.capital} region={item.region} area={item.area} latitude={item.latlng[0]} longitude={item.latlng[1]} />))}
    </div>
    );
}

export default Countries;