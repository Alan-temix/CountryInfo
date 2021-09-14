import { useState, useEffect } from "react";
import CardCountry from "../CardCountry";

const Countries = () => {
    const [data, setData] = useState([]);

    async function fetchData() {
        try {
            const url = 'https://restcountries.eu/rest/v2/all';
            let response = await fetch(url).then((response) => response.json());
            setData(response.splice(0, 24));
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
    <div className="p-4 countries-container">
        {data.map((item, key) => (<CardCountry key={item.numericCode} name={item.name} image={item.flag} alphaCode={item.alpha3Code} />))}
    </div>
    );
}

export default Countries;