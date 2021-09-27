import Header from "../components/Header";
import CardCountry from "../components/CardCountry";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Search = () => {
    const [data, setData] = useState([]);
    const { countryName } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const url = `https://restcountries.com/v3/name/${countryName}`;
                const response = await fetch(url).then(res => res.json())
                setData(response);
            } catch(error) {
                console.log(error);
            }
        }
        fetchData();
    }, [countryName]);

    return(
    <div>
        <Header />
        <h2>{data.message ? (<div className="px-5 mt-4">No se ha encontrado ningún país con el nombre "<span className="text-danger">{countryName}</span>", verifica que lo hayas escrito correctamente</div>) : (<div className="px-4 mt-4">Posibles resultados para "{countryName}":</div>)}</h2>
        <div className="p-4 countries-container">
        {data.message ? (null) : data && data.map((item) => (<CardCountry key={item.cca3} name={item.name.common} image={item.flags[0]} alphaCode={item.cca3} capital={item.capital[0]} region={item.region} area={item.area} latitude={item.latlng[0]} longitude={item.latlng[1]} /> )) }
        </div>
    </div>
    );
}

export default Search;