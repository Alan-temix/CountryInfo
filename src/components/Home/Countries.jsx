import { useRef, useState, useEffect } from "react";
import CardCountry from "../CardCountry";

const Countries = () => {
    const [data, setData] = useState([]);

    const exampleRef = useRef();

    async function fetchData() {
        try {
            const url = 'https://restcountries.eu/rest/v2/all';
            let response = await fetch(url).then((response) => response.json());
            setData(response);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
    <div ref={exampleRef} className="p-4 countries-container">
        {data.slice(0, 24).map((item, key) => (<CardCountry key={item.numericCode} name={item.name} image={item.flag} alphaCode={item.alpha3Code} capital={item.capital} />))}
    </div>
    );
}

export default Countries;