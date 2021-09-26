import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

// Components
import Header from "../components/Header";
import CountryInfoFull from "../components/CountryInfo/CountryInfoFull";

const CountryInfo = () => {
    const [data, setData] = useState(null);
    const { countryCode } = useParams();

    useEffect(() => {
        async function fetchData() {
            const url = `https://restcountries.com/v3/alpha/${countryCode}`;
            let response = await fetch(url).then((res) => res.json());
            setData(response[0]);
        }
        fetchData();
    }, [countryCode])

    return(
        <div>
            <Header />
            {!data ? <div className="px-5 mt-4">No se ha encontrado ningún país con el nombre "<span className="text-danger">{countryCode}</span>", verifica que lo hayas escrito correctamente</div> : <CountryInfoFull data={data} /> }
        </div>
    )
}

export default CountryInfo;