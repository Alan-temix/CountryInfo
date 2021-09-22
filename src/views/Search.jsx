import Header from "../components/Header";
import CardCountry from "../components/CardCountry";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Search = () => {
    const [data, setData] = useState([]);
    const { countryName } = useParams();

    async function fetchData() {
        try {
            const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
            const response = await fetch(url).then(res => res.json())
            setData(response);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [countryName]);

    return(
    <div>
        <Header />
        <h2>{data.status ? (<div className="px-5 mt-4">No se ha encontrado ningún país con el nombre "<span className="text-danger">{countryName}</span>", verifica que lo hayas escrito correctamente</div>) : (<div className="px-4 mt-4">Posibles resultados para "{countryName}":</div>)}</h2>
        <div className="p-4 countries-container">
        {data.status ? (null) : data && data.map((item) => (<CardCountry key={item.numericCode} name={item.name} image={item.flag} alphaCode={item.alpha3Code} /> )) }
        </div>
    </div>
    );
}

export default Search;