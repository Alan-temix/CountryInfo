import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

// Components
import Header from "../components/Header";
import CountryInfoFull from "../components/CountryInfo/CountryInfoFull";

const CountryInfo = () => {
    const [data, setData] = useState(null);
    const { countryCode } = useParams();

    async function fetchData() {
        const url = `https://restcountries.com/v3/alpha/${countryCode}`;
        let response = await fetch(url).then((res) => res.json());
        setData(response[0]);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <div>
            <Header />
            {data ? <CountryInfoFull data={data} /> : ""}
        </div>
    )
}

export default CountryInfo;