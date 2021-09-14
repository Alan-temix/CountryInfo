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
        <h2>{data.status ? (`No se ha encontrado ningún país con el nombre ${countryName}, verifica que lo hayas escrito correctamente`) : ("Posibles resultados: ")}</h2>
        <div className="search-container">
        {/* {data && data.map((item) => (<div className="search-container__items"><CardCountry key={item.numericCode} name={item.name} image={item.flag} alphaCode={item.alpha3Code} /></div> ))} */}
        {data.status ? (null) : data && data.map((item) => (<div className="search-container__items"><CardCountry key={item.numericCode} name={item.name} image={item.flag} alphaCode={item.alpha3Code} /></div> )) }
        </div>
    </div>
    );
}

export default Search;